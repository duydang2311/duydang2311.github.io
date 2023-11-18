---
title: Object serialization in alt:V
description: Object serialization in alt:V
date: '2023-11-18'
categories:
  - alt:V
  - csharp
published: true
---

## Overview

Maybe you already know that your object are always serialized when being emitted between server and client. There's a good thing that alt:V has built-in serialization for some basic types, e.g. `int`, `float`, `IPlayer`, `IVehicle`, `IDictionary<string, object>`... and you can save your time manually implementing custom serialization for these types.

When it comes to custom serialization, there are two things to implement:

- For object sent from the server, you must implement either `IWritable` or `IMValueConvertible`.
- For object sent from the client, you must implement `IMValueConvertible`.

## IWritable

The implementation is quite simple and straightforward. I recommend you to read the official alt:V article at https://docs.altv.mp/cs/articles/getting-started/serialization.html.

## IMValueConvertible

If an object implements `IMValueConvertible`, it is both writable and readable, while `IWritable` is writable only.

### Reusable abstract class

Here is an abstract class that implements `IMValueConvertible` which basically uses reflection.

```csharp
using System.Reflection;
using AltV.Net;

public abstract class MValueConvertibleObject<T> : IMValueConvertible where T : new()
{
    public IMValueBaseAdapter GetAdapter()
    {
        return Adapter;
    }

    public static readonly IMValueAdapter<T> Adapter = new MValueAdapter();

    public class MValueAdapter : IMValueAdapter<T>
    {
        public T FromMValue(IMValueReader reader)
        {
            var obj = new T();
            var nameToPropertyMap = typeof(T)
                .GetProperties(BindingFlags.Instance | BindingFlags.Public)
                .ToDictionary(x => x.Name, StringComparer.OrdinalIgnoreCase);
            reader.BeginObject();
            while (reader.HasNext())
            {
                var name = reader.NextName();
                if (!nameToPropertyMap.TryGetValue(name, out var propertyInfo) || propertyInfo is null)
                {
                    reader.SkipValue();
                    continue;
                }

                var propertyType = propertyInfo.PropertyType;
                if (propertyType == typeof(bool))
                {
                    propertyInfo.SetValue(obj, reader.NextBool());
                    continue;
                }
                if (propertyType == typeof(int))
                {
                    propertyInfo.SetValue(obj, reader.NextInt());
                    continue;
                }
                if (propertyType == typeof(uint))
                {
                    propertyInfo.SetValue(obj, reader.NextUInt());
                    continue;
                }
                if (propertyType == typeof(ulong))
                {
                    propertyInfo.SetValue(obj, reader.NextULong());
                    continue;
                }
                if (propertyType == typeof(long))
                {
                    propertyInfo.SetValue(obj, reader.NextLong());
                    continue;
                }
                if (propertyType == typeof(double))
                {
                    propertyInfo.SetValue(obj, reader.NextDouble());
                    continue;
                }
                if (propertyType == typeof(float))
                {
                    propertyInfo.SetValue(obj, (float)reader.NextDouble());
                    continue;
                }
                if (propertyType == typeof(string))
                {
                    propertyInfo.SetValue(obj, reader.NextString());
                    continue;
                }
            }
            reader.EndObject();
            return obj;
        }

        public void ToMValue(T value, IMValueWriter writer)
        {
            if (value is null)
            {
                return;
            }
            writer.BeginObject();
            foreach (var propertyInfo in value.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public))
            {
                var name = propertyInfo.Name;
                writer.Name(string.Create(name.Length, name, (chars, state) =>
                {
                    state.AsSpan().CopyTo(chars);
                    chars[0] = char.ToUpper(chars[0]);
                }));
                var propertyValue = (dynamic?)propertyInfo.GetValue(value);
                switch (propertyValue)
                {
                    case IMValueConvertible convertible:
                        {
                            convertible.GetAdapter().ToMValue(propertyValue, writer);
                            break;
                        }
                    case IWritable writable:
                        {
                            writable.OnWrite(writer);
                            break;
                        }
                    default:
                        {
                            writer.Value(propertyValue);
                            break;
                        }
                }
            }
            writer.EndObject();
        }

        public void ToMValue(object obj, IMValueWriter writer)
        {
            if (obj is T objAsT)
            {
                ToMValue(objAsT, writer);
            }
        }

        object IMValueBaseAdapter.FromMValue(IMValueReader reader)
        {
            return FromMValue(reader)!;
        }
    }
}
```

Here is an example of how to use this abstract class.

1. Create your data class.

```csharp
public class LoginRequest
{
    public string Name { get; set; }
    public string Password { get; set; }
}
```

2. Inherit the abstract class.

```csharp
public class LoginRequest : MValueConvertibleObject<LoginRequest>
{
    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
```

3. Register MValue adapter for your class

```csharp
Alt.RegisterMValueAdapter(LoginRequest.Adapter);
```
