import { BinaryWriter, BinaryReader } from 'google-protobuf';
import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Optional, Inject } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';

var NullValue;
(function (NullValue) {
    NullValue[NullValue["nullValue"] = 0] = "nullValue";
})(NullValue || (NullValue = {}));
class Struct {
    /**
     * Creates an object and applies default Protobuf values
     * @param Struct value
     */
    constructor(value) {
        value = value || {};
        this.fields = Object.assign({}, (value.fields || {}));
        Struct.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Struct.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Struct();
        Struct.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.fields = instance.fields || {};
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const msg_1 = {};
                    reader.readMessage(msg_1, Struct.FieldsEntry.fromBinaryReader);
                    instance.fields = instance.fields || {};
                    instance.fields[msg_1.key] = msg_1.value;
                    break;
                default:
                    reader.skipField();
            }
        }
        Struct.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (!!instance.fields) {
            const keys_1 = Object.keys(instance.fields);
            if (keys_1.length) {
                const repeated_1 = keys_1
                    .map(key => ({ key: key, value: instance.fields[key] }))
                    .reduce((r, v) => [...r, v], []);
                writer.writeRepeatedMessage(1, repeated_1, Struct.FieldsEntry.toBinaryWriter);
            }
        }
    }
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
    }
    toObject() {
        return {
            fields: Object.assign({}, (this.fields || {}))
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Struct) {
    class FieldsEntry {
        /**
         * Creates an object and applies default Protobuf values
         * @param FieldsEntry value
         */
        constructor(value) {
            value = value || {};
            this.key = value.key;
            this.value = value.value ? new Value(value.value) : undefined;
            FieldsEntry.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            FieldsEntry.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new FieldsEntry();
            FieldsEntry.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.key = instance.key || '';
            instance.value = instance.value || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.key = reader.readString();
                        break;
                    case 2:
                        instance.value = new Value();
                        reader.readMessage(instance.value, Value.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            FieldsEntry.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.key) {
                writer.writeString(1, instance.key);
            }
            if (instance.value) {
                writer.writeMessage(2, instance.value, Value.toBinaryWriter);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Struct.FieldsEntry = FieldsEntry;
})(Struct || (Struct = {}));
class Value {
    /**
     * Creates an object and applies default Protobuf values
     * @param Value value
     */
    constructor(value) {
        this._kind = Value.KindCase.none;
        value = value || {};
        this.nullValue = value.nullValue;
        this.numberValue = value.numberValue;
        this.stringValue = value.stringValue;
        this.boolValue = value.boolValue;
        this.structValue = value.structValue
            ? new Struct(value.structValue)
            : undefined;
        this.listValue = value.listValue
            ? new ListValue(value.listValue)
            : undefined;
        Value.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Value.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Value();
        Value.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.nullValue = reader.readEnum();
                    break;
                case 2:
                    instance.numberValue = reader.readDouble();
                    break;
                case 3:
                    instance.stringValue = reader.readString();
                    break;
                case 4:
                    instance.boolValue = reader.readBool();
                    break;
                case 5:
                    instance.structValue = new Struct();
                    reader.readMessage(instance.structValue, Struct.fromBinaryReader);
                    break;
                case 6:
                    instance.listValue = new ListValue();
                    reader.readMessage(instance.listValue, ListValue.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Value.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.nullValue || instance.nullValue === 0) {
            writer.writeEnum(1, instance.nullValue);
        }
        if (instance.numberValue || instance.numberValue === 0) {
            writer.writeDouble(2, instance.numberValue);
        }
        if (instance.stringValue || instance.stringValue === '') {
            writer.writeString(3, instance.stringValue);
        }
        if (instance.boolValue || instance.boolValue === false) {
            writer.writeBool(4, instance.boolValue);
        }
        if (instance.structValue) {
            writer.writeMessage(5, instance.structValue, Struct.toBinaryWriter);
        }
        if (instance.listValue) {
            writer.writeMessage(6, instance.listValue, ListValue.toBinaryWriter);
        }
    }
    get nullValue() {
        return this._nullValue;
    }
    set nullValue(value) {
        if (value !== undefined && value !== null) {
            this._numberValue = this._stringValue = this._boolValue = this._structValue = this._listValue = undefined;
            this._kind = Value.KindCase.nullValue;
        }
        this._nullValue = value;
    }
    get numberValue() {
        return this._numberValue;
    }
    set numberValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue = this._stringValue = this._boolValue = this._structValue = this._listValue = undefined;
            this._kind = Value.KindCase.numberValue;
        }
        this._numberValue = value;
    }
    get stringValue() {
        return this._stringValue;
    }
    set stringValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue = this._numberValue = this._boolValue = this._structValue = this._listValue = undefined;
            this._kind = Value.KindCase.stringValue;
        }
        this._stringValue = value;
    }
    get boolValue() {
        return this._boolValue;
    }
    set boolValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue = this._numberValue = this._stringValue = this._structValue = this._listValue = undefined;
            this._kind = Value.KindCase.boolValue;
        }
        this._boolValue = value;
    }
    get structValue() {
        return this._structValue;
    }
    set structValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue = this._numberValue = this._stringValue = this._boolValue = this._listValue = undefined;
            this._kind = Value.KindCase.structValue;
        }
        this._structValue = value;
    }
    get listValue() {
        return this._listValue;
    }
    set listValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue = this._numberValue = this._stringValue = this._boolValue = this._structValue = undefined;
            this._kind = Value.KindCase.listValue;
        }
        this._listValue = value;
    }
    get kind() {
        return this._kind;
    }
    toObject() {
        return {
            nullValue: this.nullValue,
            numberValue: this.numberValue,
            stringValue: this.stringValue,
            boolValue: this.boolValue,
            structValue: this.structValue ? this.structValue.toObject() : undefined,
            listValue: this.listValue ? this.listValue.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Value) {
    let KindCase;
    (function (KindCase) {
        KindCase[KindCase["none"] = 0] = "none";
        KindCase[KindCase["nullValue"] = 1] = "nullValue";
        KindCase[KindCase["numberValue"] = 2] = "numberValue";
        KindCase[KindCase["stringValue"] = 3] = "stringValue";
        KindCase[KindCase["boolValue"] = 4] = "boolValue";
        KindCase[KindCase["structValue"] = 5] = "structValue";
        KindCase[KindCase["listValue"] = 6] = "listValue";
    })(KindCase = Value.KindCase || (Value.KindCase = {}));
})(Value || (Value = {}));
class ListValue {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListValue value
     */
    constructor(value) {
        value = value || {};
        this.values = (value.values || []).map(m => new Value(m));
        ListValue.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListValue.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListValue();
        ListValue.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.values = instance.values || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Value();
                    reader.readMessage(messageInitializer1, Value.fromBinaryReader);
                    (instance.values = instance.values || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListValue.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.values && instance.values.length) {
            writer.writeRepeatedMessage(1, instance.values, Value.toBinaryWriter);
        }
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = value;
    }
    toObject() {
        return {
            values: (this.values || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Any {
    /**
     * Creates an object and applies default Protobuf values
     * @param Any value
     */
    constructor(value) {
        value = value || {};
        this.typeUrl = value.typeUrl;
        this.value = value.value;
        Any.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Any.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Any();
        Any.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.typeUrl = instance.typeUrl || '';
        instance.value = instance.value || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.typeUrl = reader.readString();
                    break;
                case 2:
                    instance.value = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        Any.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.typeUrl) {
            writer.writeString(1, instance.typeUrl);
        }
        if (instance.value && instance.value.length) {
            writer.writeBytes(2, instance.value);
        }
    }
    get typeUrl() {
        return this._typeUrl;
    }
    set typeUrl(value) {
        this._typeUrl = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    toObject() {
        return {
            typeUrl: this.typeUrl,
            value: this.value ? this.value.subarray(0) : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Status {
    /**
     * Creates an object and applies default Protobuf values
     * @param Status value
     */
    constructor(value) {
        value = value || {};
        this.code = value.code;
        this.message = value.message;
        this.details = (value.details || []).map(m => new Any(m));
        Status.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Status.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Status();
        Status.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.code = instance.code || 0;
        instance.message = instance.message || '';
        instance.details = instance.details || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.code = reader.readInt32();
                    break;
                case 2:
                    instance.message = reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new Any();
                    reader.readMessage(messageInitializer3, Any.fromBinaryReader);
                    (instance.details = instance.details || []).push(messageInitializer3);
                    break;
                default:
                    reader.skipField();
            }
        }
        Status.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.code) {
            writer.writeInt32(1, instance.code);
        }
        if (instance.message) {
            writer.writeString(2, instance.message);
        }
        if (instance.details && instance.details.length) {
            writer.writeRepeatedMessage(3, instance.details, Any.toBinaryWriter);
        }
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get details() {
        return this._details;
    }
    set details(value) {
        this._details = value;
    }
    toObject() {
        return {
            code: this.code,
            message: this.message,
            details: (this.details || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class LatLng {
    /**
     * Creates an object and applies default Protobuf values
     * @param LatLng value
     */
    constructor(value) {
        value = value || {};
        this.latitude = value.latitude;
        this.longitude = value.longitude;
        LatLng.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LatLng.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LatLng();
        LatLng.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.latitude = instance.latitude || 0;
        instance.longitude = instance.longitude || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.latitude = reader.readDouble();
                    break;
                case 2:
                    instance.longitude = reader.readDouble();
                    break;
                default:
                    reader.skipField();
            }
        }
        LatLng.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.latitude) {
            writer.writeDouble(1, instance.latitude);
        }
        if (instance.longitude) {
            writer.writeDouble(2, instance.longitude);
        }
    }
    get latitude() {
        return this._latitude;
    }
    set latitude(value) {
        this._latitude = value;
    }
    get longitude() {
        return this._longitude;
    }
    set longitude(value) {
        this._longitude = value;
    }
    toObject() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class FieldMask {
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldMask value
     */
    constructor(value) {
        value = value || {};
        this.paths = (value.paths || []).slice();
        FieldMask.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FieldMask.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FieldMask();
        FieldMask.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.paths = instance.paths || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.paths = instance.paths || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        FieldMask.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.paths && instance.paths.length) {
            writer.writeRepeatedString(1, instance.paths);
        }
    }
    get paths() {
        return this._paths;
    }
    set paths(value) {
        this._paths = value;
    }
    toObject() {
        return {
            paths: (this.paths || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Context {
    /**
     * Creates an object and applies default Protobuf values
     * @param Context value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.lifespanCount = value.lifespanCount;
        this.parameters = Object.assign({}, (value.parameters || {}));
        this.lifespanTime = value.lifespanTime;
        Context.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Context.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Context();
        Context.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.lifespanCount = instance.lifespanCount || 0;
        instance.parameters = instance.parameters || {};
        instance.lifespanTime = instance.lifespanTime || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.lifespanCount = reader.readInt32();
                    break;
                case 3:
                    const msg_3 = {};
                    reader.readMessage(msg_3, Context.ParametersEntry.fromBinaryReader);
                    instance.parameters = instance.parameters || {};
                    instance.parameters[msg_3.key] = msg_3.value;
                    break;
                case 4:
                    instance.lifespanTime = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Context.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.lifespanCount) {
            writer.writeInt32(2, instance.lifespanCount);
        }
        if (!!instance.parameters) {
            const keys_3 = Object.keys(instance.parameters);
            if (keys_3.length) {
                const repeated_3 = keys_3
                    .map(key => ({ key: key, value: instance.parameters[key] }))
                    .reduce((r, v) => [...r, v], []);
                writer.writeRepeatedMessage(3, repeated_3, Context.ParametersEntry.toBinaryWriter);
            }
        }
        if (instance.lifespanTime) {
            writer.writeFloat(4, instance.lifespanTime);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get lifespanCount() {
        return this._lifespanCount;
    }
    set lifespanCount(value) {
        this._lifespanCount = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get lifespanTime() {
        return this._lifespanTime;
    }
    set lifespanTime(value) {
        this._lifespanTime = value;
    }
    toObject() {
        return {
            name: this.name,
            lifespanCount: this.lifespanCount,
            parameters: Object.assign({}, (this.parameters || {})),
            lifespanTime: this.lifespanTime
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Context) {
    class Parameter {
        /**
         * Creates an object and applies default Protobuf values
         * @param Parameter value
         */
        constructor(value) {
            value = value || {};
            this.name = value.name;
            this.displayName = value.displayName;
            this.value = value.value;
            this.valueOriginal = value.valueOriginal;
            Parameter.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Parameter.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Parameter();
            Parameter.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.name = instance.name || '';
            instance.displayName = instance.displayName || '';
            instance.value = instance.value || '';
            instance.valueOriginal = instance.valueOriginal || '';
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.name = reader.readString();
                        break;
                    case 2:
                        instance.displayName = reader.readString();
                        break;
                    case 3:
                        instance.value = reader.readString();
                        break;
                    case 4:
                        instance.valueOriginal = reader.readString();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Parameter.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.name) {
                writer.writeString(1, instance.name);
            }
            if (instance.displayName) {
                writer.writeString(2, instance.displayName);
            }
            if (instance.value) {
                writer.writeString(3, instance.value);
            }
            if (instance.valueOriginal) {
                writer.writeString(4, instance.valueOriginal);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get valueOriginal() {
            return this._valueOriginal;
        }
        set valueOriginal(value) {
            this._valueOriginal = value;
        }
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                value: this.value,
                valueOriginal: this.valueOriginal
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Context.Parameter = Parameter;
    class ParametersEntry {
        /**
         * Creates an object and applies default Protobuf values
         * @param ParametersEntry value
         */
        constructor(value) {
            value = value || {};
            this.key = value.key;
            this.value = value.value ? new Context.Parameter(value.value) : undefined;
            ParametersEntry.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ParametersEntry.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ParametersEntry();
            ParametersEntry.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.key = instance.key || '';
            instance.value = instance.value || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.key = reader.readString();
                        break;
                    case 2:
                        instance.value = new Context.Parameter();
                        reader.readMessage(instance.value, Context.Parameter.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ParametersEntry.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.key) {
                writer.writeString(1, instance.key);
            }
            if (instance.value) {
                writer.writeMessage(2, instance.value, Context.Parameter.toBinaryWriter);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Context.ParametersEntry = ParametersEntry;
})(Context || (Context = {}));
class ListContextsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.pageToken = value.pageToken;
        ListContextsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListContextsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListContextsRequest();
        ListContextsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 3:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListContextsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.pageToken) {
            writer.writeString(3, instance.pageToken);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListContextsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsResponse value
     */
    constructor(value) {
        value = value || {};
        this.contexts = (value.contexts || []).map(m => new Context(m));
        this.nextPageToken = value.nextPageToken;
        ListContextsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListContextsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListContextsResponse();
        ListContextsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.contexts = instance.contexts || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Context();
                    reader.readMessage(messageInitializer1, Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListContextsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(1, instance.contexts, Context.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            contexts: (this.contexts || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        GetContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetContextRequest();
        GetContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.context = value.context ? new Context(value.context) : undefined;
        CreateContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateContextRequest();
        CreateContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.context = instance.context || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.context = new Context();
                    reader.readMessage(instance.context, Context.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.context) {
            writer.writeMessage(2, instance.context, Context.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    toObject() {
        return {
            parent: this.parent,
            context: this.context ? this.context.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.context = value.context ? new Context(value.context) : undefined;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        UpdateContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateContextRequest();
        UpdateContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.context = instance.context || undefined;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.context = new Context();
                    reader.readMessage(instance.context, Context.fromBinaryReader);
                    break;
                case 2:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.context) {
            writer.writeMessage(1, instance.context, Context.toBinaryWriter);
        }
        if (instance.updateMask) {
            writer.writeMessage(2, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            context: this.context ? this.context.toObject() : undefined,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteContextRequest();
        DeleteContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteAllContextsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAllContextsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        DeleteAllContextsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteAllContextsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteAllContextsRequest();
        DeleteAllContextsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteAllContextsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}

var IntentView;
(function (IntentView) {
    IntentView[IntentView["intentViewUnspecified"] = 0] = "intentViewUnspecified";
    IntentView[IntentView["intentViewFull"] = 1] = "intentViewFull";
    IntentView[IntentView["intentViewPartial"] = 2] = "intentViewPartial";
    IntentView[IntentView["intentViewShallow"] = 3] = "intentViewShallow";
})(IntentView || (IntentView = {}));
var IntentCategory;
(function (IntentCategory) {
    IntentCategory[IntentCategory["allIntents"] = 0] = "allIntents";
    IntentCategory[IntentCategory["defaultIntents"] = 1] = "defaultIntents";
    IntentCategory[IntentCategory["userDefinedIntents"] = 2] = "userDefinedIntents";
})(IntentCategory || (IntentCategory = {}));
class Intent {
    /**
     * Creates an object and applies default Protobuf values
     * @param Intent value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.displayName = value.displayName;
        this.webhookState = value.webhookState;
        this.priority = value.priority;
        this.isFallback = value.isFallback;
        this.mlDisabled = value.mlDisabled;
        this.inputContextNames = (value.inputContextNames || []).slice();
        this.events = (value.events || []).slice();
        this.trainingPhrases = (value.trainingPhrases || []).map(m => new Intent.TrainingPhrase(m));
        this.action = value.action;
        this.outputContexts = (value.outputContexts || []).map(m => new Context(m));
        this.resetContexts = value.resetContexts;
        this.parameters = (value.parameters || []).map(m => new Intent.Parameter(m));
        this.messages = (value.messages || []).map(m => new Intent.Message(m));
        this.defaultResponsePlatforms = (value.defaultResponsePlatforms || []).slice();
        this.rootFollowupIntentName = value.rootFollowupIntentName;
        this.parentFollowupIntentName = value.parentFollowupIntentName;
        this.followupIntentInfo = (value.followupIntentInfo || []).map(m => new Intent.FollowupIntentInfo(m));
        this.nextPageToken = value.nextPageToken;
        this.domainName = value.domainName;
        this.isStartOfDeviation = value.isStartOfDeviation;
        this.isEndOfDeviation = value.isEndOfDeviation;
        this.trainingPhraseCount = value.trainingPhraseCount;
        this.status = value.status;
        Intent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Intent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Intent();
        Intent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.displayName = instance.displayName || '';
        instance.webhookState = instance.webhookState || 0;
        instance.priority = instance.priority || 0;
        instance.isFallback = instance.isFallback || false;
        instance.mlDisabled = instance.mlDisabled || false;
        instance.inputContextNames = instance.inputContextNames || [];
        instance.events = instance.events || [];
        instance.trainingPhrases = instance.trainingPhrases || [];
        instance.action = instance.action || '';
        instance.outputContexts = instance.outputContexts || [];
        instance.resetContexts = instance.resetContexts || false;
        instance.parameters = instance.parameters || [];
        instance.messages = instance.messages || [];
        instance.defaultResponsePlatforms = instance.defaultResponsePlatforms || [];
        instance.rootFollowupIntentName = instance.rootFollowupIntentName || '';
        instance.parentFollowupIntentName = instance.parentFollowupIntentName || '';
        instance.followupIntentInfo = instance.followupIntentInfo || [];
        instance.nextPageToken = instance.nextPageToken || '';
        instance.domainName = instance.domainName || '';
        instance.isStartOfDeviation = instance.isStartOfDeviation || false;
        instance.isEndOfDeviation = instance.isEndOfDeviation || false;
        instance.trainingPhraseCount = instance.trainingPhraseCount || 0;
        instance.status = instance.status || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.displayName = reader.readString();
                    break;
                case 6:
                    instance.webhookState = reader.readEnum();
                    break;
                case 3:
                    instance.priority = reader.readInt32();
                    break;
                case 4:
                    instance.isFallback = reader.readBool();
                    break;
                case 19:
                    instance.mlDisabled = reader.readBool();
                    break;
                case 7:
                    (instance.inputContextNames = instance.inputContextNames || []).push(reader.readString());
                    break;
                case 8:
                    (instance.events = instance.events || []).push(reader.readString());
                    break;
                case 9:
                    const messageInitializer9 = new Intent.TrainingPhrase();
                    reader.readMessage(messageInitializer9, Intent.TrainingPhrase.fromBinaryReader);
                    (instance.trainingPhrases = instance.trainingPhrases || []).push(messageInitializer9);
                    break;
                case 10:
                    instance.action = reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new Context();
                    reader.readMessage(messageInitializer11, Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer11);
                    break;
                case 12:
                    instance.resetContexts = reader.readBool();
                    break;
                case 13:
                    const messageInitializer13 = new Intent.Parameter();
                    reader.readMessage(messageInitializer13, Intent.Parameter.fromBinaryReader);
                    (instance.parameters = instance.parameters || []).push(messageInitializer13);
                    break;
                case 14:
                    const messageInitializer14 = new Intent.Message();
                    reader.readMessage(messageInitializer14, Intent.Message.fromBinaryReader);
                    (instance.messages = instance.messages || []).push(messageInitializer14);
                    break;
                case 15:
                    (instance.defaultResponsePlatforms =
                        instance.defaultResponsePlatforms || []).push(reader.readEnum());
                    break;
                case 16:
                    instance.rootFollowupIntentName = reader.readString();
                    break;
                case 17:
                    instance.parentFollowupIntentName = reader.readString();
                    break;
                case 18:
                    const messageInitializer18 = new Intent.FollowupIntentInfo();
                    reader.readMessage(messageInitializer18, Intent.FollowupIntentInfo.fromBinaryReader);
                    (instance.followupIntentInfo =
                        instance.followupIntentInfo || []).push(messageInitializer18);
                    break;
                case 30:
                    instance.nextPageToken = reader.readString();
                    break;
                case 31:
                    instance.domainName = reader.readString();
                    break;
                case 32:
                    instance.isStartOfDeviation = reader.readBool();
                    break;
                case 33:
                    instance.isEndOfDeviation = reader.readBool();
                    break;
                case 34:
                    instance.trainingPhraseCount = reader.readInt32();
                    break;
                case 35:
                    instance.status = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        Intent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.webhookState) {
            writer.writeEnum(6, instance.webhookState);
        }
        if (instance.priority) {
            writer.writeInt32(3, instance.priority);
        }
        if (instance.isFallback) {
            writer.writeBool(4, instance.isFallback);
        }
        if (instance.mlDisabled) {
            writer.writeBool(19, instance.mlDisabled);
        }
        if (instance.inputContextNames && instance.inputContextNames.length) {
            writer.writeRepeatedString(7, instance.inputContextNames);
        }
        if (instance.events && instance.events.length) {
            writer.writeRepeatedString(8, instance.events);
        }
        if (instance.trainingPhrases && instance.trainingPhrases.length) {
            writer.writeRepeatedMessage(9, instance.trainingPhrases, Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.action) {
            writer.writeString(10, instance.action);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(11, instance.outputContexts, Context.toBinaryWriter);
        }
        if (instance.resetContexts) {
            writer.writeBool(12, instance.resetContexts);
        }
        if (instance.parameters && instance.parameters.length) {
            writer.writeRepeatedMessage(13, instance.parameters, Intent.Parameter.toBinaryWriter);
        }
        if (instance.messages && instance.messages.length) {
            writer.writeRepeatedMessage(14, instance.messages, Intent.Message.toBinaryWriter);
        }
        if (instance.defaultResponsePlatforms &&
            instance.defaultResponsePlatforms.length) {
            writer.writeRepeatedEnum(15, instance.defaultResponsePlatforms);
        }
        if (instance.rootFollowupIntentName) {
            writer.writeString(16, instance.rootFollowupIntentName);
        }
        if (instance.parentFollowupIntentName) {
            writer.writeString(17, instance.parentFollowupIntentName);
        }
        if (instance.followupIntentInfo && instance.followupIntentInfo.length) {
            writer.writeRepeatedMessage(18, instance.followupIntentInfo, Intent.FollowupIntentInfo.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(30, instance.nextPageToken);
        }
        if (instance.domainName) {
            writer.writeString(31, instance.domainName);
        }
        if (instance.isStartOfDeviation) {
            writer.writeBool(32, instance.isStartOfDeviation);
        }
        if (instance.isEndOfDeviation) {
            writer.writeBool(33, instance.isEndOfDeviation);
        }
        if (instance.trainingPhraseCount) {
            writer.writeInt32(34, instance.trainingPhraseCount);
        }
        if (instance.status) {
            writer.writeEnum(35, instance.status);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get webhookState() {
        return this._webhookState;
    }
    set webhookState(value) {
        this._webhookState = value;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    get isFallback() {
        return this._isFallback;
    }
    set isFallback(value) {
        this._isFallback = value;
    }
    get mlDisabled() {
        return this._mlDisabled;
    }
    set mlDisabled(value) {
        this._mlDisabled = value;
    }
    get inputContextNames() {
        return this._inputContextNames;
    }
    set inputContextNames(value) {
        this._inputContextNames = value;
    }
    get events() {
        return this._events;
    }
    set events(value) {
        this._events = value;
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get resetContexts() {
        return this._resetContexts;
    }
    set resetContexts(value) {
        this._resetContexts = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get messages() {
        return this._messages;
    }
    set messages(value) {
        this._messages = value;
    }
    get defaultResponsePlatforms() {
        return this._defaultResponsePlatforms;
    }
    set defaultResponsePlatforms(value) {
        this._defaultResponsePlatforms = value;
    }
    get rootFollowupIntentName() {
        return this._rootFollowupIntentName;
    }
    set rootFollowupIntentName(value) {
        this._rootFollowupIntentName = value;
    }
    get parentFollowupIntentName() {
        return this._parentFollowupIntentName;
    }
    set parentFollowupIntentName(value) {
        this._parentFollowupIntentName = value;
    }
    get followupIntentInfo() {
        return this._followupIntentInfo;
    }
    set followupIntentInfo(value) {
        this._followupIntentInfo = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    get domainName() {
        return this._domainName;
    }
    set domainName(value) {
        this._domainName = value;
    }
    get isStartOfDeviation() {
        return this._isStartOfDeviation;
    }
    set isStartOfDeviation(value) {
        this._isStartOfDeviation = value;
    }
    get isEndOfDeviation() {
        return this._isEndOfDeviation;
    }
    set isEndOfDeviation(value) {
        this._isEndOfDeviation = value;
    }
    get trainingPhraseCount() {
        return this._trainingPhraseCount;
    }
    set trainingPhraseCount(value) {
        this._trainingPhraseCount = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    toObject() {
        return {
            name: this.name,
            displayName: this.displayName,
            webhookState: this.webhookState,
            priority: this.priority,
            isFallback: this.isFallback,
            mlDisabled: this.mlDisabled,
            inputContextNames: (this.inputContextNames || []).slice(),
            events: (this.events || []).slice(),
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject()),
            action: this.action,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            resetContexts: this.resetContexts,
            parameters: (this.parameters || []).map(m => m.toObject()),
            messages: (this.messages || []).map(m => m.toObject()),
            defaultResponsePlatforms: (this.defaultResponsePlatforms || []).slice(),
            rootFollowupIntentName: this.rootFollowupIntentName,
            parentFollowupIntentName: this.parentFollowupIntentName,
            followupIntentInfo: (this.followupIntentInfo || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken,
            domainName: this.domainName,
            isStartOfDeviation: this.isStartOfDeviation,
            isEndOfDeviation: this.isEndOfDeviation,
            trainingPhraseCount: this.trainingPhraseCount,
            status: this.status
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Intent) {
    let IntentStatus;
    (function (IntentStatus) {
        IntentStatus[IntentStatus["active"] = 0] = "active";
        IntentStatus[IntentStatus["inactive"] = 1] = "inactive";
    })(IntentStatus = Intent.IntentStatus || (Intent.IntentStatus = {}));
    let WebhookState;
    (function (WebhookState) {
        WebhookState[WebhookState["webhookStateUnspecified"] = 0] = "webhookStateUnspecified";
        WebhookState[WebhookState["webhookStateEnabled"] = 1] = "webhookStateEnabled";
        WebhookState[WebhookState["webhookStateEnabledForSlotFilling"] = 2] = "webhookStateEnabledForSlotFilling";
    })(WebhookState = Intent.WebhookState || (Intent.WebhookState = {}));
    class TrainingPhrase {
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhrase value
         */
        constructor(value) {
            value = value || {};
            this.name = value.name;
            this.type = value.type;
            this.text = value.text;
            this.entities = (value.entities || []).map(m => new Intent.TrainingPhrase.Entity(m));
            this.timesAddedCount = value.timesAddedCount;
            TrainingPhrase.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            TrainingPhrase.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new TrainingPhrase();
            TrainingPhrase.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.name = instance.name || '';
            instance.type = instance.type || 0;
            instance.text = instance.text || '';
            instance.entities = instance.entities || [];
            instance.timesAddedCount = instance.timesAddedCount || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.name = reader.readString();
                        break;
                    case 2:
                        instance.type = reader.readEnum();
                        break;
                    case 3:
                        instance.text = reader.readString();
                        break;
                    case 4:
                        const messageInitializer4 = new Intent.TrainingPhrase.Entity();
                        reader.readMessage(messageInitializer4, Intent.TrainingPhrase.Entity.fromBinaryReader);
                        (instance.entities = instance.entities || []).push(messageInitializer4);
                        break;
                    case 5:
                        instance.timesAddedCount = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            TrainingPhrase.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.name) {
                writer.writeString(1, instance.name);
            }
            if (instance.type) {
                writer.writeEnum(2, instance.type);
            }
            if (instance.text) {
                writer.writeString(3, instance.text);
            }
            if (instance.entities && instance.entities.length) {
                writer.writeRepeatedMessage(4, instance.entities, Intent.TrainingPhrase.Entity.toBinaryWriter);
            }
            if (instance.timesAddedCount) {
                writer.writeInt32(5, instance.timesAddedCount);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get type() {
            return this._type;
        }
        set type(value) {
            this._type = value;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
        }
        get entities() {
            return this._entities;
        }
        set entities(value) {
            this._entities = value;
        }
        get timesAddedCount() {
            return this._timesAddedCount;
        }
        set timesAddedCount(value) {
            this._timesAddedCount = value;
        }
        toObject() {
            return {
                name: this.name,
                type: this.type,
                text: this.text,
                entities: (this.entities || []).map(m => m.toObject()),
                timesAddedCount: this.timesAddedCount
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.TrainingPhrase = TrainingPhrase;
    (function (TrainingPhrase) {
        let Type;
        (function (Type) {
            Type[Type["typeUnspecified"] = 0] = "typeUnspecified";
            Type[Type["example"] = 1] = "example";
            Type[Type["template"] = 2] = "template";
        })(Type = TrainingPhrase.Type || (TrainingPhrase.Type = {}));
        class Entity {
            /**
             * Creates an object and applies default Protobuf values
             * @param Entity value
             */
            constructor(value) {
                value = value || {};
                this.entityTypeName = value.entityTypeName;
                this.entityTypeDisplayName = value.entityTypeDisplayName;
                this.entityValueName = value.entityValueName;
                this.entityValueDisplayName = value.entityValueDisplayName;
                this.start = value.start;
                this.end = value.end;
                this.parameterName = value.parameterName;
                this.parameterDisplayName = value.parameterDisplayName;
                Entity.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Entity.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Entity();
                Entity.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.entityTypeName = instance.entityTypeName || '';
                instance.entityTypeDisplayName = instance.entityTypeDisplayName || '';
                instance.entityValueName = instance.entityValueName || '';
                instance.entityValueDisplayName = instance.entityValueDisplayName || '';
                instance.start = instance.start || 0;
                instance.end = instance.end || 0;
                instance.parameterName = instance.parameterName || '';
                instance.parameterDisplayName = instance.parameterDisplayName || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.entityTypeName = reader.readString();
                            break;
                        case 3:
                            instance.entityTypeDisplayName = reader.readString();
                            break;
                        case 4:
                            instance.entityValueName = reader.readString();
                            break;
                        case 5:
                            instance.entityValueDisplayName = reader.readString();
                            break;
                        case 6:
                            instance.start = reader.readInt32();
                            break;
                        case 7:
                            instance.end = reader.readInt32();
                            break;
                        case 8:
                            instance.parameterName = reader.readString();
                            break;
                        case 9:
                            instance.parameterDisplayName = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Entity.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.entityTypeName) {
                    writer.writeString(1, instance.entityTypeName);
                }
                if (instance.entityTypeDisplayName) {
                    writer.writeString(3, instance.entityTypeDisplayName);
                }
                if (instance.entityValueName) {
                    writer.writeString(4, instance.entityValueName);
                }
                if (instance.entityValueDisplayName) {
                    writer.writeString(5, instance.entityValueDisplayName);
                }
                if (instance.start) {
                    writer.writeInt32(6, instance.start);
                }
                if (instance.end) {
                    writer.writeInt32(7, instance.end);
                }
                if (instance.parameterName) {
                    writer.writeString(8, instance.parameterName);
                }
                if (instance.parameterDisplayName) {
                    writer.writeString(9, instance.parameterDisplayName);
                }
            }
            get entityTypeName() {
                return this._entityTypeName;
            }
            set entityTypeName(value) {
                this._entityTypeName = value;
            }
            get entityTypeDisplayName() {
                return this._entityTypeDisplayName;
            }
            set entityTypeDisplayName(value) {
                this._entityTypeDisplayName = value;
            }
            get entityValueName() {
                return this._entityValueName;
            }
            set entityValueName(value) {
                this._entityValueName = value;
            }
            get entityValueDisplayName() {
                return this._entityValueDisplayName;
            }
            set entityValueDisplayName(value) {
                this._entityValueDisplayName = value;
            }
            get start() {
                return this._start;
            }
            set start(value) {
                this._start = value;
            }
            get end() {
                return this._end;
            }
            set end(value) {
                this._end = value;
            }
            get parameterName() {
                return this._parameterName;
            }
            set parameterName(value) {
                this._parameterName = value;
            }
            get parameterDisplayName() {
                return this._parameterDisplayName;
            }
            set parameterDisplayName(value) {
                this._parameterDisplayName = value;
            }
            toObject() {
                return {
                    entityTypeName: this.entityTypeName,
                    entityTypeDisplayName: this.entityTypeDisplayName,
                    entityValueName: this.entityValueName,
                    entityValueDisplayName: this.entityValueDisplayName,
                    start: this.start,
                    end: this.end,
                    parameterName: this.parameterName,
                    parameterDisplayName: this.parameterDisplayName
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        TrainingPhrase.Entity = Entity;
    })(TrainingPhrase = Intent.TrainingPhrase || (Intent.TrainingPhrase = {}));
    class Parameter {
        /**
         * Creates an object and applies default Protobuf values
         * @param Parameter value
         */
        constructor(value) {
            value = value || {};
            this.name = value.name;
            this.displayName = value.displayName;
            this.value = value.value;
            this.defaultValue = value.defaultValue;
            this.entityTypeName = value.entityTypeName;
            this.entityTypeDisplayName = value.entityTypeDisplayName;
            this.mandatory = value.mandatory;
            this.prompts = (value.prompts || []).slice();
            this.isList = value.isList;
            Parameter.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Parameter.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Parameter();
            Parameter.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.name = instance.name || '';
            instance.displayName = instance.displayName || '';
            instance.value = instance.value || '';
            instance.defaultValue = instance.defaultValue || '';
            instance.entityTypeName = instance.entityTypeName || '';
            instance.entityTypeDisplayName = instance.entityTypeDisplayName || '';
            instance.mandatory = instance.mandatory || false;
            instance.prompts = instance.prompts || [];
            instance.isList = instance.isList || false;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.name = reader.readString();
                        break;
                    case 2:
                        instance.displayName = reader.readString();
                        break;
                    case 3:
                        instance.value = reader.readString();
                        break;
                    case 4:
                        instance.defaultValue = reader.readString();
                        break;
                    case 5:
                        instance.entityTypeName = reader.readString();
                        break;
                    case 6:
                        instance.entityTypeDisplayName = reader.readString();
                        break;
                    case 7:
                        instance.mandatory = reader.readBool();
                        break;
                    case 8:
                        (instance.prompts = instance.prompts || []).push(reader.readString());
                        break;
                    case 9:
                        instance.isList = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Parameter.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.name) {
                writer.writeString(1, instance.name);
            }
            if (instance.displayName) {
                writer.writeString(2, instance.displayName);
            }
            if (instance.value) {
                writer.writeString(3, instance.value);
            }
            if (instance.defaultValue) {
                writer.writeString(4, instance.defaultValue);
            }
            if (instance.entityTypeName) {
                writer.writeString(5, instance.entityTypeName);
            }
            if (instance.entityTypeDisplayName) {
                writer.writeString(6, instance.entityTypeDisplayName);
            }
            if (instance.mandatory) {
                writer.writeBool(7, instance.mandatory);
            }
            if (instance.prompts && instance.prompts.length) {
                writer.writeRepeatedString(8, instance.prompts);
            }
            if (instance.isList) {
                writer.writeBool(9, instance.isList);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get defaultValue() {
            return this._defaultValue;
        }
        set defaultValue(value) {
            this._defaultValue = value;
        }
        get entityTypeName() {
            return this._entityTypeName;
        }
        set entityTypeName(value) {
            this._entityTypeName = value;
        }
        get entityTypeDisplayName() {
            return this._entityTypeDisplayName;
        }
        set entityTypeDisplayName(value) {
            this._entityTypeDisplayName = value;
        }
        get mandatory() {
            return this._mandatory;
        }
        set mandatory(value) {
            this._mandatory = value;
        }
        get prompts() {
            return this._prompts;
        }
        set prompts(value) {
            this._prompts = value;
        }
        get isList() {
            return this._isList;
        }
        set isList(value) {
            this._isList = value;
        }
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                value: this.value,
                defaultValue: this.defaultValue,
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                mandatory: this.mandatory,
                prompts: (this.prompts || []).slice(),
                isList: this.isList
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.Parameter = Parameter;
    class Message {
        /**
         * Creates an object and applies default Protobuf values
         * @param Message value
         */
        constructor(value) {
            this._message = Message.MessageCase.none;
            value = value || {};
            this.text = value.text ? new Intent.Message.Text(value.text) : undefined;
            this.image = value.image
                ? new Intent.Message.Image(value.image)
                : undefined;
            this.quickReplies = value.quickReplies
                ? new Intent.Message.QuickReplies(value.quickReplies)
                : undefined;
            this.card = value.card ? new Intent.Message.Card(value.card) : undefined;
            this.payload = value.payload
                ? new Struct(value.payload)
                : undefined;
            this.simpleResponses = value.simpleResponses
                ? new Intent.Message.SimpleResponses(value.simpleResponses)
                : undefined;
            this.basicCard = value.basicCard
                ? new Intent.Message.BasicCard(value.basicCard)
                : undefined;
            this.suggestions = value.suggestions
                ? new Intent.Message.Suggestions(value.suggestions)
                : undefined;
            this.linkOutSuggestion = value.linkOutSuggestion
                ? new Intent.Message.LinkOutSuggestion(value.linkOutSuggestion)
                : undefined;
            this.listSelect = value.listSelect
                ? new Intent.Message.ListSelect(value.listSelect)
                : undefined;
            this.carouselSelect = value.carouselSelect
                ? new Intent.Message.CarouselSelect(value.carouselSelect)
                : undefined;
            this.htmlText = value.htmlText
                ? new Intent.Message.HTMLText(value.htmlText)
                : undefined;
            this.video = value.video
                ? new Intent.Message.Video(value.video)
                : undefined;
            this.audio = value.audio
                ? new Intent.Message.Audio(value.audio)
                : undefined;
            this.platform = value.platform;
            Message.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Message.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Message();
            Message.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.platform = instance.platform || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.text = new Intent.Message.Text();
                        reader.readMessage(instance.text, Intent.Message.Text.fromBinaryReader);
                        break;
                    case 2:
                        instance.image = new Intent.Message.Image();
                        reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                        break;
                    case 3:
                        instance.quickReplies = new Intent.Message.QuickReplies();
                        reader.readMessage(instance.quickReplies, Intent.Message.QuickReplies.fromBinaryReader);
                        break;
                    case 4:
                        instance.card = new Intent.Message.Card();
                        reader.readMessage(instance.card, Intent.Message.Card.fromBinaryReader);
                        break;
                    case 5:
                        instance.payload = new Struct();
                        reader.readMessage(instance.payload, Struct.fromBinaryReader);
                        break;
                    case 7:
                        instance.simpleResponses = new Intent.Message.SimpleResponses();
                        reader.readMessage(instance.simpleResponses, Intent.Message.SimpleResponses.fromBinaryReader);
                        break;
                    case 8:
                        instance.basicCard = new Intent.Message.BasicCard();
                        reader.readMessage(instance.basicCard, Intent.Message.BasicCard.fromBinaryReader);
                        break;
                    case 9:
                        instance.suggestions = new Intent.Message.Suggestions();
                        reader.readMessage(instance.suggestions, Intent.Message.Suggestions.fromBinaryReader);
                        break;
                    case 10:
                        instance.linkOutSuggestion = new Intent.Message.LinkOutSuggestion();
                        reader.readMessage(instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.fromBinaryReader);
                        break;
                    case 11:
                        instance.listSelect = new Intent.Message.ListSelect();
                        reader.readMessage(instance.listSelect, Intent.Message.ListSelect.fromBinaryReader);
                        break;
                    case 12:
                        instance.carouselSelect = new Intent.Message.CarouselSelect();
                        reader.readMessage(instance.carouselSelect, Intent.Message.CarouselSelect.fromBinaryReader);
                        break;
                    case 13:
                        instance.htmlText = new Intent.Message.HTMLText();
                        reader.readMessage(instance.htmlText, Intent.Message.HTMLText.fromBinaryReader);
                        break;
                    case 14:
                        instance.video = new Intent.Message.Video();
                        reader.readMessage(instance.video, Intent.Message.Video.fromBinaryReader);
                        break;
                    case 15:
                        instance.audio = new Intent.Message.Audio();
                        reader.readMessage(instance.audio, Intent.Message.Audio.fromBinaryReader);
                        break;
                    case 6:
                        instance.platform = reader.readEnum();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Message.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.text) {
                writer.writeMessage(1, instance.text, Intent.Message.Text.toBinaryWriter);
            }
            if (instance.image) {
                writer.writeMessage(2, instance.image, Intent.Message.Image.toBinaryWriter);
            }
            if (instance.quickReplies) {
                writer.writeMessage(3, instance.quickReplies, Intent.Message.QuickReplies.toBinaryWriter);
            }
            if (instance.card) {
                writer.writeMessage(4, instance.card, Intent.Message.Card.toBinaryWriter);
            }
            if (instance.payload) {
                writer.writeMessage(5, instance.payload, Struct.toBinaryWriter);
            }
            if (instance.simpleResponses) {
                writer.writeMessage(7, instance.simpleResponses, Intent.Message.SimpleResponses.toBinaryWriter);
            }
            if (instance.basicCard) {
                writer.writeMessage(8, instance.basicCard, Intent.Message.BasicCard.toBinaryWriter);
            }
            if (instance.suggestions) {
                writer.writeMessage(9, instance.suggestions, Intent.Message.Suggestions.toBinaryWriter);
            }
            if (instance.linkOutSuggestion) {
                writer.writeMessage(10, instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.toBinaryWriter);
            }
            if (instance.listSelect) {
                writer.writeMessage(11, instance.listSelect, Intent.Message.ListSelect.toBinaryWriter);
            }
            if (instance.carouselSelect) {
                writer.writeMessage(12, instance.carouselSelect, Intent.Message.CarouselSelect.toBinaryWriter);
            }
            if (instance.htmlText) {
                writer.writeMessage(13, instance.htmlText, Intent.Message.HTMLText.toBinaryWriter);
            }
            if (instance.video) {
                writer.writeMessage(14, instance.video, Intent.Message.Video.toBinaryWriter);
            }
            if (instance.audio) {
                writer.writeMessage(15, instance.audio, Intent.Message.Audio.toBinaryWriter);
            }
            if (instance.platform) {
                writer.writeEnum(6, instance.platform);
            }
        }
        get text() {
            return this._text;
        }
        set text(value) {
            if (value !== undefined && value !== null) {
                this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.text;
            }
            this._text = value;
        }
        get image() {
            return this._image;
        }
        set image(value) {
            if (value !== undefined && value !== null) {
                this._text = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.image;
            }
            this._image = value;
        }
        get quickReplies() {
            return this._quickReplies;
        }
        set quickReplies(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.quickReplies;
            }
            this._quickReplies = value;
        }
        get card() {
            return this._card;
        }
        set card(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.card;
            }
            this._card = value;
        }
        get payload() {
            return this._payload;
        }
        set payload(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.payload;
            }
            this._payload = value;
        }
        get simpleResponses() {
            return this._simpleResponses;
        }
        set simpleResponses(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.simpleResponses;
            }
            this._simpleResponses = value;
        }
        get basicCard() {
            return this._basicCard;
        }
        set basicCard(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.basicCard;
            }
            this._basicCard = value;
        }
        get suggestions() {
            return this._suggestions;
        }
        set suggestions(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.suggestions;
            }
            this._suggestions = value;
        }
        get linkOutSuggestion() {
            return this._linkOutSuggestion;
        }
        set linkOutSuggestion(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.linkOutSuggestion;
            }
            this._linkOutSuggestion = value;
        }
        get listSelect() {
            return this._listSelect;
        }
        set listSelect(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.listSelect;
            }
            this._listSelect = value;
        }
        get carouselSelect() {
            return this._carouselSelect;
        }
        set carouselSelect(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.carouselSelect;
            }
            this._carouselSelect = value;
        }
        get htmlText() {
            return this._htmlText;
        }
        set htmlText(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._video = this._audio = undefined;
                this._message = Message.MessageCase.htmlText;
            }
            this._htmlText = value;
        }
        get video() {
            return this._video;
        }
        set video(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._audio = undefined;
                this._message = Message.MessageCase.video;
            }
            this._video = value;
        }
        get audio() {
            return this._audio;
        }
        set audio(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = undefined;
                this._message = Message.MessageCase.audio;
            }
            this._audio = value;
        }
        get platform() {
            return this._platform;
        }
        set platform(value) {
            this._platform = value;
        }
        get message() {
            return this._message;
        }
        toObject() {
            return {
                text: this.text ? this.text.toObject() : undefined,
                image: this.image ? this.image.toObject() : undefined,
                quickReplies: this.quickReplies
                    ? this.quickReplies.toObject()
                    : undefined,
                card: this.card ? this.card.toObject() : undefined,
                payload: this.payload ? this.payload.toObject() : undefined,
                simpleResponses: this.simpleResponses
                    ? this.simpleResponses.toObject()
                    : undefined,
                basicCard: this.basicCard ? this.basicCard.toObject() : undefined,
                suggestions: this.suggestions ? this.suggestions.toObject() : undefined,
                linkOutSuggestion: this.linkOutSuggestion
                    ? this.linkOutSuggestion.toObject()
                    : undefined,
                listSelect: this.listSelect ? this.listSelect.toObject() : undefined,
                carouselSelect: this.carouselSelect
                    ? this.carouselSelect.toObject()
                    : undefined,
                htmlText: this.htmlText ? this.htmlText.toObject() : undefined,
                video: this.video ? this.video.toObject() : undefined,
                audio: this.audio ? this.audio.toObject() : undefined,
                platform: this.platform
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.Message = Message;
    (function (Message) {
        let MessageCase;
        (function (MessageCase) {
            MessageCase[MessageCase["none"] = 0] = "none";
            MessageCase[MessageCase["text"] = 1] = "text";
            MessageCase[MessageCase["image"] = 2] = "image";
            MessageCase[MessageCase["quickReplies"] = 3] = "quickReplies";
            MessageCase[MessageCase["card"] = 4] = "card";
            MessageCase[MessageCase["payload"] = 5] = "payload";
            MessageCase[MessageCase["simpleResponses"] = 6] = "simpleResponses";
            MessageCase[MessageCase["basicCard"] = 7] = "basicCard";
            MessageCase[MessageCase["suggestions"] = 8] = "suggestions";
            MessageCase[MessageCase["linkOutSuggestion"] = 9] = "linkOutSuggestion";
            MessageCase[MessageCase["listSelect"] = 10] = "listSelect";
            MessageCase[MessageCase["carouselSelect"] = 11] = "carouselSelect";
            MessageCase[MessageCase["htmlText"] = 12] = "htmlText";
            MessageCase[MessageCase["video"] = 13] = "video";
            MessageCase[MessageCase["audio"] = 14] = "audio";
        })(MessageCase = Message.MessageCase || (Message.MessageCase = {}));
        let Platform;
        (function (Platform) {
            Platform[Platform["platformUnspecified"] = 0] = "platformUnspecified";
            Platform[Platform["facebook"] = 1] = "facebook";
            Platform[Platform["slack"] = 2] = "slack";
            Platform[Platform["telegram"] = 3] = "telegram";
            Platform[Platform["kik"] = 4] = "kik";
            Platform[Platform["skype"] = 5] = "skype";
            Platform[Platform["line"] = 6] = "line";
            Platform[Platform["viber"] = 7] = "viber";
            Platform[Platform["actionsOnGoogle"] = 8] = "actionsOnGoogle";
        })(Platform = Message.Platform || (Message.Platform = {}));
        class Text {
            /**
             * Creates an object and applies default Protobuf values
             * @param Text value
             */
            constructor(value) {
                value = value || {};
                this.text = (value.text || []).slice();
                Text.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Text.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Text();
                Text.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.text = instance.text || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            (instance.text = instance.text || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Text.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.text && instance.text.length) {
                    writer.writeRepeatedString(1, instance.text);
                }
            }
            get text() {
                return this._text;
            }
            set text(value) {
                this._text = value;
            }
            toObject() {
                return {
                    text: (this.text || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Text = Text;
        class Image {
            /**
             * Creates an object and applies default Protobuf values
             * @param Image value
             */
            constructor(value) {
                value = value || {};
                this.imageUri = value.imageUri;
                this.accessibilityText = value.accessibilityText;
                Image.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Image.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Image();
                Image.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.imageUri = instance.imageUri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.imageUri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Image.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.imageUri) {
                    writer.writeString(1, instance.imageUri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get imageUri() {
                return this._imageUri;
            }
            set imageUri(value) {
                this._imageUri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    imageUri: this.imageUri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Image = Image;
        class QuickReplies {
            /**
             * Creates an object and applies default Protobuf values
             * @param QuickReplies value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.quickReplies = (value.quickReplies || []).slice();
                QuickReplies.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                QuickReplies.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new QuickReplies();
                QuickReplies.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.quickReplies = instance.quickReplies || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            (instance.quickReplies = instance.quickReplies || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                QuickReplies.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.quickReplies && instance.quickReplies.length) {
                    writer.writeRepeatedString(2, instance.quickReplies);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get quickReplies() {
                return this._quickReplies;
            }
            set quickReplies(value) {
                this._quickReplies = value;
            }
            toObject() {
                return {
                    title: this.title,
                    quickReplies: (this.quickReplies || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.QuickReplies = QuickReplies;
        class Card {
            /**
             * Creates an object and applies default Protobuf values
             * @param Card value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.subtitle = value.subtitle;
                this.imageUri = value.imageUri;
                this.buttons = (value.buttons || []).map(m => new Intent.Message.Card.Button(m));
                Card.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Card.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Card();
                Card.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.subtitle = instance.subtitle || '';
                instance.imageUri = instance.imageUri || '';
                instance.buttons = instance.buttons || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            instance.subtitle = reader.readString();
                            break;
                        case 3:
                            instance.imageUri = reader.readString();
                            break;
                        case 4:
                            const messageInitializer4 = new Intent.Message.Card.Button();
                            reader.readMessage(messageInitializer4, Intent.Message.Card.Button.fromBinaryReader);
                            (instance.buttons = instance.buttons || []).push(messageInitializer4);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Card.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.subtitle) {
                    writer.writeString(2, instance.subtitle);
                }
                if (instance.imageUri) {
                    writer.writeString(3, instance.imageUri);
                }
                if (instance.buttons && instance.buttons.length) {
                    writer.writeRepeatedMessage(4, instance.buttons, Intent.Message.Card.Button.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get subtitle() {
                return this._subtitle;
            }
            set subtitle(value) {
                this._subtitle = value;
            }
            get imageUri() {
                return this._imageUri;
            }
            set imageUri(value) {
                this._imageUri = value;
            }
            get buttons() {
                return this._buttons;
            }
            set buttons(value) {
                this._buttons = value;
            }
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    imageUri: this.imageUri,
                    buttons: (this.buttons || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Card = Card;
        (function (Card) {
            class Button {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value) {
                    value = value || {};
                    this.text = value.text;
                    this.postback = value.postback;
                    Button.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Button.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Button();
                    Button.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.text = instance.text || '';
                    instance.postback = instance.postback || '';
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.text = reader.readString();
                                break;
                            case 2:
                                instance.postback = reader.readString();
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Button.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.text) {
                        writer.writeString(1, instance.text);
                    }
                    if (instance.postback) {
                        writer.writeString(2, instance.postback);
                    }
                }
                get text() {
                    return this._text;
                }
                set text(value) {
                    this._text = value;
                }
                get postback() {
                    return this._postback;
                }
                set postback(value) {
                    this._postback = value;
                }
                toObject() {
                    return {
                        text: this.text,
                        postback: this.postback
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            Card.Button = Button;
        })(Card = Message.Card || (Message.Card = {}));
        class SimpleResponse {
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponse value
             */
            constructor(value) {
                value = value || {};
                this.textToSpeech = value.textToSpeech;
                this.ssml = value.ssml;
                this.displayText = value.displayText;
                SimpleResponse.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SimpleResponse.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SimpleResponse();
                SimpleResponse.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.textToSpeech = instance.textToSpeech || '';
                instance.ssml = instance.ssml || '';
                instance.displayText = instance.displayText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.textToSpeech = reader.readString();
                            break;
                        case 2:
                            instance.ssml = reader.readString();
                            break;
                        case 3:
                            instance.displayText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SimpleResponse.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.textToSpeech) {
                    writer.writeString(1, instance.textToSpeech);
                }
                if (instance.ssml) {
                    writer.writeString(2, instance.ssml);
                }
                if (instance.displayText) {
                    writer.writeString(3, instance.displayText);
                }
            }
            get textToSpeech() {
                return this._textToSpeech;
            }
            set textToSpeech(value) {
                this._textToSpeech = value;
            }
            get ssml() {
                return this._ssml;
            }
            set ssml(value) {
                this._ssml = value;
            }
            get displayText() {
                return this._displayText;
            }
            set displayText(value) {
                this._displayText = value;
            }
            toObject() {
                return {
                    textToSpeech: this.textToSpeech,
                    ssml: this.ssml,
                    displayText: this.displayText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SimpleResponse = SimpleResponse;
        class SimpleResponses {
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponses value
             */
            constructor(value) {
                value = value || {};
                this.simpleResponses = (value.simpleResponses || []).map(m => new Intent.Message.SimpleResponse(m));
                SimpleResponses.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SimpleResponses.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SimpleResponses();
                SimpleResponses.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.simpleResponses = instance.simpleResponses || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.SimpleResponse();
                            reader.readMessage(messageInitializer1, Intent.Message.SimpleResponse.fromBinaryReader);
                            (instance.simpleResponses = instance.simpleResponses || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SimpleResponses.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.simpleResponses && instance.simpleResponses.length) {
                    writer.writeRepeatedMessage(1, instance.simpleResponses, Intent.Message.SimpleResponse.toBinaryWriter);
                }
            }
            get simpleResponses() {
                return this._simpleResponses;
            }
            set simpleResponses(value) {
                this._simpleResponses = value;
            }
            toObject() {
                return {
                    simpleResponses: (this.simpleResponses || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SimpleResponses = SimpleResponses;
        class BasicCard {
            /**
             * Creates an object and applies default Protobuf values
             * @param BasicCard value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.subtitle = value.subtitle;
                this.formattedText = value.formattedText;
                this.image = value.image
                    ? new Intent.Message.Image(value.image)
                    : undefined;
                this.buttons = (value.buttons || []).map(m => new Intent.Message.BasicCard.Button(m));
                BasicCard.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                BasicCard.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new BasicCard();
                BasicCard.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.subtitle = instance.subtitle || '';
                instance.formattedText = instance.formattedText || '';
                instance.image = instance.image || undefined;
                instance.buttons = instance.buttons || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            instance.subtitle = reader.readString();
                            break;
                        case 3:
                            instance.formattedText = reader.readString();
                            break;
                        case 4:
                            instance.image = new Intent.Message.Image();
                            reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                            break;
                        case 5:
                            const messageInitializer5 = new Intent.Message.BasicCard.Button();
                            reader.readMessage(messageInitializer5, Intent.Message.BasicCard.Button.fromBinaryReader);
                            (instance.buttons = instance.buttons || []).push(messageInitializer5);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                BasicCard.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.subtitle) {
                    writer.writeString(2, instance.subtitle);
                }
                if (instance.formattedText) {
                    writer.writeString(3, instance.formattedText);
                }
                if (instance.image) {
                    writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                }
                if (instance.buttons && instance.buttons.length) {
                    writer.writeRepeatedMessage(5, instance.buttons, Intent.Message.BasicCard.Button.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get subtitle() {
                return this._subtitle;
            }
            set subtitle(value) {
                this._subtitle = value;
            }
            get formattedText() {
                return this._formattedText;
            }
            set formattedText(value) {
                this._formattedText = value;
            }
            get image() {
                return this._image;
            }
            set image(value) {
                this._image = value;
            }
            get buttons() {
                return this._buttons;
            }
            set buttons(value) {
                this._buttons = value;
            }
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    formattedText: this.formattedText,
                    image: this.image ? this.image.toObject() : undefined,
                    buttons: (this.buttons || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.BasicCard = BasicCard;
        (function (BasicCard) {
            class Button {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value) {
                    value = value || {};
                    this.title = value.title;
                    this.openUriAction = value.openUriAction
                        ? new Intent.Message.BasicCard.Button.OpenUriAction(value.openUriAction)
                        : undefined;
                    Button.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Button.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Button();
                    Button.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.title = instance.title || '';
                    instance.openUriAction = instance.openUriAction || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.title = reader.readString();
                                break;
                            case 2:
                                instance.openUriAction = new Intent.Message.BasicCard.Button.OpenUriAction();
                                reader.readMessage(instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Button.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.title) {
                        writer.writeString(1, instance.title);
                    }
                    if (instance.openUriAction) {
                        writer.writeMessage(2, instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction.toBinaryWriter);
                    }
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get openUriAction() {
                    return this._openUriAction;
                }
                set openUriAction(value) {
                    this._openUriAction = value;
                }
                toObject() {
                    return {
                        title: this.title,
                        openUriAction: this.openUriAction
                            ? this.openUriAction.toObject()
                            : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            BasicCard.Button = Button;
            (function (Button) {
                class OpenUriAction {
                    /**
                     * Creates an object and applies default Protobuf values
                     * @param OpenUriAction value
                     */
                    constructor(value) {
                        value = value || {};
                        this.uri = value.uri;
                        OpenUriAction.refineValues(this);
                    }
                    static toBinary(instance) {
                        const writer = new BinaryWriter();
                        OpenUriAction.toBinaryWriter(instance, writer);
                        return writer.getResultBuffer();
                    }
                    static fromBinary(bytes) {
                        const instance = new OpenUriAction();
                        OpenUriAction.fromBinaryReader(instance, new BinaryReader(bytes));
                        return instance;
                    }
                    static refineValues(instance) {
                        instance.uri = instance.uri || '';
                    }
                    static fromBinaryReader(instance, reader) {
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    instance.uri = reader.readString();
                                    break;
                                default:
                                    reader.skipField();
                            }
                        }
                        OpenUriAction.refineValues(instance);
                    }
                    static toBinaryWriter(instance, writer) {
                        if (instance.uri) {
                            writer.writeString(1, instance.uri);
                        }
                    }
                    get uri() {
                        return this._uri;
                    }
                    set uri(value) {
                        this._uri = value;
                    }
                    toObject() {
                        return {
                            uri: this.uri
                        };
                    }
                    toJSON() {
                        return this.toObject();
                    }
                }
                Button.OpenUriAction = OpenUriAction;
            })(Button = BasicCard.Button || (BasicCard.Button = {}));
        })(BasicCard = Message.BasicCard || (Message.BasicCard = {}));
        class Suggestion {
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestion value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                Suggestion.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Suggestion.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Suggestion();
                Suggestion.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Suggestion.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            toObject() {
                return {
                    title: this.title
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Suggestion = Suggestion;
        class Suggestions {
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestions value
             */
            constructor(value) {
                value = value || {};
                this.suggestions = (value.suggestions || []).map(m => new Intent.Message.Suggestion(m));
                Suggestions.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Suggestions.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Suggestions();
                Suggestions.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.suggestions = instance.suggestions || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.Suggestion();
                            reader.readMessage(messageInitializer1, Intent.Message.Suggestion.fromBinaryReader);
                            (instance.suggestions = instance.suggestions || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Suggestions.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.suggestions && instance.suggestions.length) {
                    writer.writeRepeatedMessage(1, instance.suggestions, Intent.Message.Suggestion.toBinaryWriter);
                }
            }
            get suggestions() {
                return this._suggestions;
            }
            set suggestions(value) {
                this._suggestions = value;
            }
            toObject() {
                return {
                    suggestions: (this.suggestions || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Suggestions = Suggestions;
        class LinkOutSuggestion {
            /**
             * Creates an object and applies default Protobuf values
             * @param LinkOutSuggestion value
             */
            constructor(value) {
                value = value || {};
                this.destinationName = value.destinationName;
                this.uri = value.uri;
                LinkOutSuggestion.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                LinkOutSuggestion.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new LinkOutSuggestion();
                LinkOutSuggestion.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.destinationName = instance.destinationName || '';
                instance.uri = instance.uri || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.destinationName = reader.readString();
                            break;
                        case 2:
                            instance.uri = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                LinkOutSuggestion.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.destinationName) {
                    writer.writeString(1, instance.destinationName);
                }
                if (instance.uri) {
                    writer.writeString(2, instance.uri);
                }
            }
            get destinationName() {
                return this._destinationName;
            }
            set destinationName(value) {
                this._destinationName = value;
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            toObject() {
                return {
                    destinationName: this.destinationName,
                    uri: this.uri
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.LinkOutSuggestion = LinkOutSuggestion;
        class ListSelect {
            /**
             * Creates an object and applies default Protobuf values
             * @param ListSelect value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.items = (value.items || []).map(m => new Intent.Message.ListSelect.Item(m));
                ListSelect.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                ListSelect.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new ListSelect();
                ListSelect.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.items = instance.items || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            const messageInitializer2 = new Intent.Message.ListSelect.Item();
                            reader.readMessage(messageInitializer2, Intent.Message.ListSelect.Item.fromBinaryReader);
                            (instance.items = instance.items || []).push(messageInitializer2);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                ListSelect.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.items && instance.items.length) {
                    writer.writeRepeatedMessage(2, instance.items, Intent.Message.ListSelect.Item.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get items() {
                return this._items;
            }
            set items(value) {
                this._items = value;
            }
            toObject() {
                return {
                    title: this.title,
                    items: (this.items || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.ListSelect = ListSelect;
        (function (ListSelect) {
            class Item {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value) {
                    value = value || {};
                    this.info = value.info
                        ? new Intent.Message.SelectItemInfo(value.info)
                        : undefined;
                    this.title = value.title;
                    this.description = value.description;
                    this.image = value.image
                        ? new Intent.Message.Image(value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Item.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Item();
                    Item.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.info = instance.info || undefined;
                    instance.title = instance.title || '';
                    instance.description = instance.description || '';
                    instance.image = instance.image || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.info = new Intent.Message.SelectItemInfo();
                                reader.readMessage(instance.info, Intent.Message.SelectItemInfo.fromBinaryReader);
                                break;
                            case 2:
                                instance.title = reader.readString();
                                break;
                            case 3:
                                instance.description = reader.readString();
                                break;
                            case 4:
                                instance.image = new Intent.Message.Image();
                                reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Item.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.info) {
                        writer.writeMessage(1, instance.info, Intent.Message.SelectItemInfo.toBinaryWriter);
                    }
                    if (instance.title) {
                        writer.writeString(2, instance.title);
                    }
                    if (instance.description) {
                        writer.writeString(3, instance.description);
                    }
                    if (instance.image) {
                        writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                    }
                }
                get info() {
                    return this._info;
                }
                set info(value) {
                    this._info = value;
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get description() {
                    return this._description;
                }
                set description(value) {
                    this._description = value;
                }
                get image() {
                    return this._image;
                }
                set image(value) {
                    this._image = value;
                }
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            ListSelect.Item = Item;
        })(ListSelect = Message.ListSelect || (Message.ListSelect = {}));
        class CarouselSelect {
            /**
             * Creates an object and applies default Protobuf values
             * @param CarouselSelect value
             */
            constructor(value) {
                value = value || {};
                this.items = (value.items || []).map(m => new Intent.Message.CarouselSelect.Item(m));
                CarouselSelect.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                CarouselSelect.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new CarouselSelect();
                CarouselSelect.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.items = instance.items || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.CarouselSelect.Item();
                            reader.readMessage(messageInitializer1, Intent.Message.CarouselSelect.Item.fromBinaryReader);
                            (instance.items = instance.items || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                CarouselSelect.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.items && instance.items.length) {
                    writer.writeRepeatedMessage(1, instance.items, Intent.Message.CarouselSelect.Item.toBinaryWriter);
                }
            }
            get items() {
                return this._items;
            }
            set items(value) {
                this._items = value;
            }
            toObject() {
                return {
                    items: (this.items || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.CarouselSelect = CarouselSelect;
        (function (CarouselSelect) {
            class Item {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value) {
                    value = value || {};
                    this.info = value.info
                        ? new Intent.Message.SelectItemInfo(value.info)
                        : undefined;
                    this.title = value.title;
                    this.description = value.description;
                    this.image = value.image
                        ? new Intent.Message.Image(value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Item.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Item();
                    Item.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.info = instance.info || undefined;
                    instance.title = instance.title || '';
                    instance.description = instance.description || '';
                    instance.image = instance.image || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.info = new Intent.Message.SelectItemInfo();
                                reader.readMessage(instance.info, Intent.Message.SelectItemInfo.fromBinaryReader);
                                break;
                            case 2:
                                instance.title = reader.readString();
                                break;
                            case 3:
                                instance.description = reader.readString();
                                break;
                            case 4:
                                instance.image = new Intent.Message.Image();
                                reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Item.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.info) {
                        writer.writeMessage(1, instance.info, Intent.Message.SelectItemInfo.toBinaryWriter);
                    }
                    if (instance.title) {
                        writer.writeString(2, instance.title);
                    }
                    if (instance.description) {
                        writer.writeString(3, instance.description);
                    }
                    if (instance.image) {
                        writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                    }
                }
                get info() {
                    return this._info;
                }
                set info(value) {
                    this._info = value;
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get description() {
                    return this._description;
                }
                set description(value) {
                    this._description = value;
                }
                get image() {
                    return this._image;
                }
                set image(value) {
                    this._image = value;
                }
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            CarouselSelect.Item = Item;
        })(CarouselSelect = Message.CarouselSelect || (Message.CarouselSelect = {}));
        class HTMLText {
            /**
             * Creates an object and applies default Protobuf values
             * @param HTMLText value
             */
            constructor(value) {
                value = value || {};
                this.text = (value.text || []).slice();
                HTMLText.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                HTMLText.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new HTMLText();
                HTMLText.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.text = instance.text || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            (instance.text = instance.text || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                HTMLText.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.text && instance.text.length) {
                    writer.writeRepeatedString(1, instance.text);
                }
            }
            get text() {
                return this._text;
            }
            set text(value) {
                this._text = value;
            }
            toObject() {
                return {
                    text: (this.text || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.HTMLText = HTMLText;
        class Video {
            /**
             * Creates an object and applies default Protobuf values
             * @param Video value
             */
            constructor(value) {
                value = value || {};
                this.uri = value.uri;
                this.accessibilityText = value.accessibilityText;
                Video.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Video.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Video();
                Video.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.uri = instance.uri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.uri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Video.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.uri) {
                    writer.writeString(1, instance.uri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Video = Video;
        class Audio {
            /**
             * Creates an object and applies default Protobuf values
             * @param Audio value
             */
            constructor(value) {
                value = value || {};
                this.uri = value.uri;
                this.accessibilityText = value.accessibilityText;
                Audio.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Audio.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Audio();
                Audio.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.uri = instance.uri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.uri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Audio.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.uri) {
                    writer.writeString(1, instance.uri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Audio = Audio;
        class SelectItemInfo {
            /**
             * Creates an object and applies default Protobuf values
             * @param SelectItemInfo value
             */
            constructor(value) {
                value = value || {};
                this.key = value.key;
                this.synonyms = (value.synonyms || []).slice();
                SelectItemInfo.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SelectItemInfo.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SelectItemInfo();
                SelectItemInfo.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.key = instance.key || '';
                instance.synonyms = instance.synonyms || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.key = reader.readString();
                            break;
                        case 2:
                            (instance.synonyms = instance.synonyms || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SelectItemInfo.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.key) {
                    writer.writeString(1, instance.key);
                }
                if (instance.synonyms && instance.synonyms.length) {
                    writer.writeRepeatedString(2, instance.synonyms);
                }
            }
            get key() {
                return this._key;
            }
            set key(value) {
                this._key = value;
            }
            get synonyms() {
                return this._synonyms;
            }
            set synonyms(value) {
                this._synonyms = value;
            }
            toObject() {
                return {
                    key: this.key,
                    synonyms: (this.synonyms || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SelectItemInfo = SelectItemInfo;
    })(Message = Intent.Message || (Intent.Message = {}));
    class FollowupIntentInfo {
        /**
         * Creates an object and applies default Protobuf values
         * @param FollowupIntentInfo value
         */
        constructor(value) {
            value = value || {};
            this.followupIntentName = value.followupIntentName;
            this.parentFollowupIntentName = value.parentFollowupIntentName;
            FollowupIntentInfo.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            FollowupIntentInfo.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new FollowupIntentInfo();
            FollowupIntentInfo.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.followupIntentName = instance.followupIntentName || '';
            instance.parentFollowupIntentName =
                instance.parentFollowupIntentName || '';
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.followupIntentName = reader.readString();
                        break;
                    case 2:
                        instance.parentFollowupIntentName = reader.readString();
                        break;
                    default:
                        reader.skipField();
                }
            }
            FollowupIntentInfo.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.followupIntentName) {
                writer.writeString(1, instance.followupIntentName);
            }
            if (instance.parentFollowupIntentName) {
                writer.writeString(2, instance.parentFollowupIntentName);
            }
        }
        get followupIntentName() {
            return this._followupIntentName;
        }
        set followupIntentName(value) {
            this._followupIntentName = value;
        }
        get parentFollowupIntentName() {
            return this._parentFollowupIntentName;
        }
        set parentFollowupIntentName(value) {
            this._parentFollowupIntentName = value;
        }
        toObject() {
            return {
                followupIntentName: this.followupIntentName,
                parentFollowupIntentName: this.parentFollowupIntentName
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.FollowupIntentInfo = FollowupIntentInfo;
})(Intent || (Intent = {}));
class ListIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        this.pageToken = value.pageToken;
        this.filterByCategory = value.filterByCategory;
        this.sortByField = value.sortByField
            ? new IntentSorting(value.sortByField)
            : undefined;
        ListIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListIntentsRequest();
        ListIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.filterByCategory = instance.filterByCategory || 0;
        instance.sortByField = instance.sortByField || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.intentView = reader.readEnum();
                    break;
                case 5:
                    instance.pageToken = reader.readString();
                    break;
                case 6:
                    instance.filterByCategory = reader.readEnum();
                    break;
                case 7:
                    instance.sortByField = new IntentSorting();
                    reader.readMessage(instance.sortByField, IntentSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(3, instance.intentView);
        }
        if (instance.pageToken) {
            writer.writeString(5, instance.pageToken);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(6, instance.filterByCategory);
        }
        if (instance.sortByField) {
            writer.writeMessage(7, instance.sortByField, IntentSorting.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentView: this.intentView,
            pageToken: this.pageToken,
            filterByCategory: this.filterByCategory,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListIntentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        this.nextPageToken = value.nextPageToken;
        ListIntentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListIntentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListIntentsResponse();
        ListIntentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListIntentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        this.pageToken = value.pageToken;
        GetIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetIntentRequest();
        GetIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.intentView = reader.readEnum();
                    break;
                case 10:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(3, instance.intentView);
        }
        if (instance.pageToken) {
            writer.writeString(10, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode,
            intentView: this.intentView,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.intent = value.intent ? new Intent(value.intent) : undefined;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        CreateIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateIntentRequest();
        CreateIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.intent = instance.intent || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intent) {
            writer.writeMessage(2, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(4, instance.intentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.intent = value.intent ? new Intent(value.intent) : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        this.intentView = value.intentView;
        UpdateIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateIntentRequest();
        UpdateIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intent = instance.intent || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
        instance.intentView = instance.intentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                case 4:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intent) {
            writer.writeMessage(1, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, FieldMask.toBinaryWriter);
        }
        if (instance.intentView) {
            writer.writeEnum(4, instance.intentView);
        }
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteIntentRequest();
        DeleteIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchUpdateIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsRequest value
     */
    constructor(value) {
        this._intentBatch = BatchUpdateIntentsRequest.IntentBatchCase.none;
        value = value || {};
        this.parent = value.parent;
        this.intentBatchUri = value.intentBatchUri;
        this.intentBatchInline = value.intentBatchInline
            ? new IntentBatch(value.intentBatchInline)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        this.intentView = value.intentView;
        BatchUpdateIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateIntentsRequest();
        BatchUpdateIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
        instance.intentView = instance.intentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.intentBatchUri = reader.readString();
                    break;
                case 3:
                    instance.intentBatchInline = new IntentBatch();
                    reader.readMessage(instance.intentBatchInline, IntentBatch.fromBinaryReader);
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                case 6:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intentBatchUri || instance.intentBatchUri === '') {
            writer.writeString(2, instance.intentBatchUri);
        }
        if (instance.intentBatchInline) {
            writer.writeMessage(3, instance.intentBatchInline, IntentBatch.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, FieldMask.toBinaryWriter);
        }
        if (instance.intentView) {
            writer.writeEnum(6, instance.intentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intentBatchUri() {
        return this._intentBatchUri;
    }
    set intentBatchUri(value) {
        if (value !== undefined && value !== null) {
            this._intentBatchInline = undefined;
            this._intentBatch =
                BatchUpdateIntentsRequest.IntentBatchCase.intentBatchUri;
        }
        this._intentBatchUri = value;
    }
    get intentBatchInline() {
        return this._intentBatchInline;
    }
    set intentBatchInline(value) {
        if (value !== undefined && value !== null) {
            this._intentBatchUri = undefined;
            this._intentBatch =
                BatchUpdateIntentsRequest.IntentBatchCase.intentBatchInline;
        }
        this._intentBatchInline = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get intentBatch() {
        return this._intentBatch;
    }
    toObject() {
        return {
            parent: this.parent,
            intentBatchUri: this.intentBatchUri,
            intentBatchInline: this.intentBatchInline
                ? this.intentBatchInline.toObject()
                : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (BatchUpdateIntentsRequest) {
    let IntentBatchCase;
    (function (IntentBatchCase) {
        IntentBatchCase[IntentBatchCase["none"] = 0] = "none";
        IntentBatchCase[IntentBatchCase["intentBatchUri"] = 1] = "intentBatchUri";
        IntentBatchCase[IntentBatchCase["intentBatchInline"] = 2] = "intentBatchInline";
    })(IntentBatchCase = BatchUpdateIntentsRequest.IntentBatchCase || (BatchUpdateIntentsRequest.IntentBatchCase = {}));
})(BatchUpdateIntentsRequest || (BatchUpdateIntentsRequest = {}));
class BatchUpdateIntentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        BatchUpdateIntentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateIntentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateIntentsResponse();
        BatchUpdateIntentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateIntentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchDeleteIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteIntentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.intents = (value.intents || []).map(m => new Intent(m));
        BatchDeleteIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteIntentsRequest();
        BatchDeleteIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.intents = instance.intents || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Intent();
                    reader.readMessage(messageInitializer2, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(2, instance.intents, Intent.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            parent: this.parent,
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class IntentBatch {
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentBatch value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        IntentBatch.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        IntentBatch.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new IntentBatch();
        IntentBatch.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        IntentBatch.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class IntentSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        IntentSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        IntentSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new IntentSorting();
        IntentSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        IntentSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (IntentSorting) {
    let IntentSortingField;
    (function (IntentSortingField) {
        IntentSortingField[IntentSortingField["noIntentSorting"] = 0] = "noIntentSorting";
        IntentSortingField[IntentSortingField["sortIntentByName"] = 1] = "sortIntentByName";
        IntentSortingField[IntentSortingField["sortIntentByCreationDate"] = 2] = "sortIntentByCreationDate";
        IntentSortingField[IntentSortingField["sortIntentByLastUpdated"] = 3] = "sortIntentByLastUpdated";
        IntentSortingField[IntentSortingField["sortIntentByUsersaysCount"] = 4] = "sortIntentByUsersaysCount";
    })(IntentSortingField = IntentSorting.IntentSortingField || (IntentSorting.IntentSortingField = {}));
})(IntentSorting || (IntentSorting = {}));

var EntityTypeView;
(function (EntityTypeView) {
    EntityTypeView[EntityTypeView["entityTypeViewUnspecified"] = 0] = "entityTypeViewUnspecified";
    EntityTypeView[EntityTypeView["entityTypeViewFull"] = 1] = "entityTypeViewFull";
    EntityTypeView[EntityTypeView["entityTypeViewPartial"] = 2] = "entityTypeViewPartial";
    EntityTypeView[EntityTypeView["entityTypeViewShallow"] = 3] = "entityTypeViewShallow";
})(EntityTypeView || (EntityTypeView = {}));
var EntityTypeCategory;
(function (EntityTypeCategory) {
    EntityTypeCategory[EntityTypeCategory["allEntityTypes"] = 0] = "allEntityTypes";
    EntityTypeCategory[EntityTypeCategory["defaultEntityTypes"] = 1] = "defaultEntityTypes";
    EntityTypeCategory[EntityTypeCategory["userDefinedEntityTypes"] = 2] = "userDefinedEntityTypes";
})(EntityTypeCategory || (EntityTypeCategory = {}));
class EntityType {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityType value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.displayName = value.displayName;
        this.kind = value.kind;
        this.autoExpansionMode = value.autoExpansionMode;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.nextPageToken = value.nextPageToken;
        this.entityCount = value.entityCount;
        this.status = value.status;
        this.synonymCount = value.synonymCount;
        EntityType.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityType.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityType();
        EntityType.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.displayName = instance.displayName || '';
        instance.kind = instance.kind || 0;
        instance.autoExpansionMode = instance.autoExpansionMode || 0;
        instance.entities = instance.entities || [];
        instance.nextPageToken = instance.nextPageToken || '';
        instance.entityCount = instance.entityCount || 0;
        instance.status = instance.status || 0;
        instance.synonymCount = instance.synonymCount || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.displayName = reader.readString();
                    break;
                case 3:
                    instance.kind = reader.readEnum();
                    break;
                case 4:
                    instance.autoExpansionMode = reader.readEnum();
                    break;
                case 6:
                    const messageInitializer6 = new EntityType.Entity();
                    reader.readMessage(messageInitializer6, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer6);
                    break;
                case 10:
                    instance.nextPageToken = reader.readString();
                    break;
                case 11:
                    instance.entityCount = reader.readInt32();
                    break;
                case 12:
                    instance.status = reader.readEnum();
                    break;
                case 13:
                    instance.synonymCount = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityType.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.kind) {
            writer.writeEnum(3, instance.kind);
        }
        if (instance.autoExpansionMode) {
            writer.writeEnum(4, instance.autoExpansionMode);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(6, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(10, instance.nextPageToken);
        }
        if (instance.entityCount) {
            writer.writeInt32(11, instance.entityCount);
        }
        if (instance.status) {
            writer.writeEnum(12, instance.status);
        }
        if (instance.synonymCount) {
            writer.writeInt32(13, instance.synonymCount);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get autoExpansionMode() {
        return this._autoExpansionMode;
    }
    set autoExpansionMode(value) {
        this._autoExpansionMode = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    get entityCount() {
        return this._entityCount;
    }
    set entityCount(value) {
        this._entityCount = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get synonymCount() {
        return this._synonymCount;
    }
    set synonymCount(value) {
        this._synonymCount = value;
    }
    toObject() {
        return {
            name: this.name,
            displayName: this.displayName,
            kind: this.kind,
            autoExpansionMode: this.autoExpansionMode,
            entities: (this.entities || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken,
            entityCount: this.entityCount,
            status: this.status,
            synonymCount: this.synonymCount
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EntityType) {
    let Kind;
    (function (Kind) {
        Kind[Kind["kindUnspecified"] = 0] = "kindUnspecified";
        Kind[Kind["kindMap"] = 1] = "kindMap";
        Kind[Kind["kindList"] = 2] = "kindList";
    })(Kind = EntityType.Kind || (EntityType.Kind = {}));
    let EntityTypeStatus;
    (function (EntityTypeStatus) {
        EntityTypeStatus[EntityTypeStatus["active"] = 0] = "active";
        EntityTypeStatus[EntityTypeStatus["inactive"] = 1] = "inactive";
    })(EntityTypeStatus = EntityType.EntityTypeStatus || (EntityType.EntityTypeStatus = {}));
    let AutoExpansionMode;
    (function (AutoExpansionMode) {
        AutoExpansionMode[AutoExpansionMode["autoExpansionModeUnspecified"] = 0] = "autoExpansionModeUnspecified";
        AutoExpansionMode[AutoExpansionMode["autoExpansionModeDefault"] = 1] = "autoExpansionModeDefault";
    })(AutoExpansionMode = EntityType.AutoExpansionMode || (EntityType.AutoExpansionMode = {}));
    class Entity {
        /**
         * Creates an object and applies default Protobuf values
         * @param Entity value
         */
        constructor(value) {
            value = value || {};
            this.value = value.value;
            this.synonyms = (value.synonyms || []).slice();
            this.name = value.name;
            this.displayName = value.displayName;
            this.synonymCount = value.synonymCount;
            Entity.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Entity.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Entity();
            Entity.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.value = instance.value || '';
            instance.synonyms = instance.synonyms || [];
            instance.name = instance.name || '';
            instance.displayName = instance.displayName || '';
            instance.synonymCount = instance.synonymCount || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.value = reader.readString();
                        break;
                    case 2:
                        (instance.synonyms = instance.synonyms || []).push(reader.readString());
                        break;
                    case 3:
                        instance.name = reader.readString();
                        break;
                    case 4:
                        instance.displayName = reader.readString();
                        break;
                    case 5:
                        instance.synonymCount = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Entity.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.value) {
                writer.writeString(1, instance.value);
            }
            if (instance.synonyms && instance.synonyms.length) {
                writer.writeRepeatedString(2, instance.synonyms);
            }
            if (instance.name) {
                writer.writeString(3, instance.name);
            }
            if (instance.displayName) {
                writer.writeString(4, instance.displayName);
            }
            if (instance.synonymCount) {
                writer.writeInt32(5, instance.synonymCount);
            }
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get synonyms() {
            return this._synonyms;
        }
        set synonyms(value) {
            this._synonyms = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get synonymCount() {
            return this._synonymCount;
        }
        set synonymCount(value) {
            this._synonymCount = value;
        }
        toObject() {
            return {
                value: this.value,
                synonyms: (this.synonyms || []).slice(),
                name: this.name,
                displayName: this.displayName,
                synonymCount: this.synonymCount
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    EntityType.Entity = Entity;
})(EntityType || (EntityType = {}));
class ListEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.pageToken = value.pageToken;
        this.entityTypeView = value.entityTypeView;
        this.filterByCategory = value.filterByCategory;
        this.sortByField = value.sortByField
            ? new EntityTypeSorting(value.sortByField)
            : undefined;
        ListEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListEntityTypesRequest();
        ListEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.pageToken = instance.pageToken || '';
        instance.entityTypeView = instance.entityTypeView || 0;
        instance.filterByCategory = instance.filterByCategory || 0;
        instance.sortByField = instance.sortByField || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                case 5:
                    instance.entityTypeView = reader.readEnum();
                    break;
                case 6:
                    instance.filterByCategory = reader.readEnum();
                    break;
                case 7:
                    instance.sortByField = new EntityTypeSorting();
                    reader.readMessage(instance.sortByField, EntityTypeSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
        }
        if (instance.entityTypeView) {
            writer.writeEnum(5, instance.entityTypeView);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(6, instance.filterByCategory);
        }
        if (instance.sortByField) {
            writer.writeMessage(7, instance.sortByField, EntityTypeSorting.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get entityTypeView() {
        return this._entityTypeView;
    }
    set entityTypeView(value) {
        this._entityTypeView = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            pageToken: this.pageToken,
            entityTypeView: this.entityTypeView,
            filterByCategory: this.filterByCategory,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListEntityTypesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        this.nextPageToken = value.nextPageToken;
        ListEntityTypesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListEntityTypesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListEntityTypesResponse();
        ListEntityTypesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListEntityTypesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.languageCode = value.languageCode;
        this.pageToken = value.pageToken;
        GetEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetEntityTypeRequest();
        GetEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.languageCode = instance.languageCode || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.pageToken) {
            writer.writeString(5, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityType = value.entityType
            ? new EntityType(value.entityType)
            : undefined;
        this.languageCode = value.languageCode;
        CreateEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateEntityTypeRequest();
        CreateEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityType = instance.entityType || undefined;
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.entityType = new EntityType();
                    reader.readMessage(instance.entityType, EntityType.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityType) {
            writer.writeMessage(2, instance.entityType, EntityType.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityType: this.entityType ? this.entityType.toObject() : undefined,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.entityType = value.entityType
            ? new EntityType(value.entityType)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        UpdateEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateEntityTypeRequest();
        UpdateEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityType = instance.entityType || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityType = new EntityType();
                    reader.readMessage(instance.entityType, EntityType.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityType) {
            writer.writeMessage(1, instance.entityType, EntityType.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            entityType: this.entityType ? this.entityType.toObject() : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteEntityTypeRequest();
        DeleteEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchUpdateEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesRequest value
     */
    constructor(value) {
        this._entityTypeBatch = BatchUpdateEntityTypesRequest.EntityTypeBatchCase.none;
        value = value || {};
        this.parent = value.parent;
        this.entityTypeBatchUri = value.entityTypeBatchUri;
        this.entityTypeBatchInline = value.entityTypeBatchInline
            ? new EntityTypeBatch(value.entityTypeBatchInline)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        BatchUpdateEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntityTypesRequest();
        BatchUpdateEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.entityTypeBatchUri = reader.readString();
                    break;
                case 3:
                    instance.entityTypeBatchInline = new EntityTypeBatch();
                    reader.readMessage(instance.entityTypeBatchInline, EntityTypeBatch.fromBinaryReader);
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityTypeBatchUri || instance.entityTypeBatchUri === '') {
            writer.writeString(2, instance.entityTypeBatchUri);
        }
        if (instance.entityTypeBatchInline) {
            writer.writeMessage(3, instance.entityTypeBatchInline, EntityTypeBatch.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityTypeBatchUri() {
        return this._entityTypeBatchUri;
    }
    set entityTypeBatchUri(value) {
        if (value !== undefined && value !== null) {
            this._entityTypeBatchInline = undefined;
            this._entityTypeBatch =
                BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchUri;
        }
        this._entityTypeBatchUri = value;
    }
    get entityTypeBatchInline() {
        return this._entityTypeBatchInline;
    }
    set entityTypeBatchInline(value) {
        if (value !== undefined && value !== null) {
            this._entityTypeBatchUri = undefined;
            this._entityTypeBatch =
                BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchInline;
        }
        this._entityTypeBatchInline = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get entityTypeBatch() {
        return this._entityTypeBatch;
    }
    toObject() {
        return {
            parent: this.parent,
            entityTypeBatchUri: this.entityTypeBatchUri,
            entityTypeBatchInline: this.entityTypeBatchInline
                ? this.entityTypeBatchInline.toObject()
                : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (BatchUpdateEntityTypesRequest) {
    let EntityTypeBatchCase;
    (function (EntityTypeBatchCase) {
        EntityTypeBatchCase[EntityTypeBatchCase["none"] = 0] = "none";
        EntityTypeBatchCase[EntityTypeBatchCase["entityTypeBatchUri"] = 1] = "entityTypeBatchUri";
        EntityTypeBatchCase[EntityTypeBatchCase["entityTypeBatchInline"] = 2] = "entityTypeBatchInline";
    })(EntityTypeBatchCase = BatchUpdateEntityTypesRequest.EntityTypeBatchCase || (BatchUpdateEntityTypesRequest.EntityTypeBatchCase = {}));
})(BatchUpdateEntityTypesRequest || (BatchUpdateEntityTypesRequest = {}));
class BatchUpdateEntityTypesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        BatchUpdateEntityTypesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntityTypesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntityTypesResponse();
        BatchUpdateEntityTypesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntityTypesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchDeleteEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntityTypesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityTypeNames = (value.entityTypeNames || []).slice();
        BatchDeleteEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteEntityTypesRequest();
        BatchDeleteEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityTypeNames = instance.entityTypeNames || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.entityTypeNames = instance.entityTypeNames || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityTypeNames && instance.entityTypeNames.length) {
            writer.writeRepeatedString(2, instance.entityTypeNames);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityTypeNames() {
        return this._entityTypeNames;
    }
    set entityTypeNames(value) {
        this._entityTypeNames = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityTypeNames: (this.entityTypeNames || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchCreateEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchCreateEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.languageCode = value.languageCode;
        BatchCreateEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchCreateEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchCreateEntitiesRequest();
        BatchCreateEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entities = instance.entities || [];
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityType.Entity();
                    reader.readMessage(messageInitializer2, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchCreateEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(2, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entities: (this.entities || []).map(m => m.toObject()),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchUpdateEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        BatchUpdateEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntitiesRequest();
        BatchUpdateEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entities = instance.entities || [];
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityType.Entity();
                    reader.readMessage(messageInitializer2, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(2, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(4, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entities: (this.entities || []).map(m => m.toObject()),
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BatchDeleteEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityValues = (value.entityValues || []).slice();
        this.languageCode = value.languageCode;
        BatchDeleteEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteEntitiesRequest();
        BatchDeleteEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityValues = instance.entityValues || [];
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.entityValues = instance.entityValues || []).push(reader.readString());
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityValues && instance.entityValues.length) {
            writer.writeRepeatedString(2, instance.entityValues);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityValues() {
        return this._entityValues;
    }
    set entityValues(value) {
        this._entityValues = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityValues: (this.entityValues || []).slice(),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EntityTypeBatch {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeBatch value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        EntityTypeBatch.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityTypeBatch.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityTypeBatch();
        EntityTypeBatch.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityTypeBatch.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EntityTypeSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        EntityTypeSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityTypeSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityTypeSorting();
        EntityTypeSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityTypeSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EntityTypeSorting) {
    let EntityTypeSortingField;
    (function (EntityTypeSortingField) {
        EntityTypeSortingField[EntityTypeSortingField["noEntityTypeSorting"] = 0] = "noEntityTypeSorting";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByName"] = 1] = "sortEntityTypeByName";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByCreationDate"] = 2] = "sortEntityTypeByCreationDate";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByLastUpdated"] = 3] = "sortEntityTypeByLastUpdated";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByEntityValueCount"] = 4] = "sortEntityTypeByEntityValueCount";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeBySynonymCount"] = 5] = "sortEntityTypeBySynonymCount";
    })(EntityTypeSortingField = EntityTypeSorting.EntityTypeSortingField || (EntityTypeSorting.EntityTypeSortingField = {}));
})(EntityTypeSorting || (EntityTypeSorting = {}));

var AudioEncoding;
(function (AudioEncoding) {
    AudioEncoding[AudioEncoding["audioEncodingUnspecified"] = 0] = "audioEncodingUnspecified";
    AudioEncoding[AudioEncoding["audioEncodingLinear16"] = 1] = "audioEncodingLinear16";
    AudioEncoding[AudioEncoding["audioEncodingFlac"] = 2] = "audioEncodingFlac";
    AudioEncoding[AudioEncoding["audioEncodingMulaw"] = 3] = "audioEncodingMulaw";
    AudioEncoding[AudioEncoding["audioEncodingAmr"] = 4] = "audioEncodingAmr";
    AudioEncoding[AudioEncoding["audioEncodingAmrWb"] = 5] = "audioEncodingAmrWb";
    AudioEncoding[AudioEncoding["audioEncodingOggOpus"] = 6] = "audioEncodingOggOpus";
    AudioEncoding[AudioEncoding["audioEncodingSpeexWithHeaderByte"] = 7] = "audioEncodingSpeexWithHeaderByte";
})(AudioEncoding || (AudioEncoding = {}));
class DetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.queryParams = value.queryParams
            ? new QueryParameters(value.queryParams)
            : undefined;
        this.queryInput = value.queryInput
            ? new QueryInput(value.queryInput)
            : undefined;
        this.inputAudio = value.inputAudio;
        DetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectIntentRequest();
        DetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.queryParams = instance.queryParams || undefined;
        instance.queryInput = instance.queryInput || undefined;
        instance.inputAudio = instance.inputAudio || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                case 2:
                    instance.queryParams = new QueryParameters();
                    reader.readMessage(instance.queryParams, QueryParameters.fromBinaryReader);
                    break;
                case 3:
                    instance.queryInput = new QueryInput();
                    reader.readMessage(instance.queryInput, QueryInput.fromBinaryReader);
                    break;
                case 5:
                    instance.inputAudio = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
        if (instance.queryParams) {
            writer.writeMessage(2, instance.queryParams, QueryParameters.toBinaryWriter);
        }
        if (instance.queryInput) {
            writer.writeMessage(3, instance.queryInput, QueryInput.toBinaryWriter);
        }
        if (instance.inputAudio && instance.inputAudio.length) {
            writer.writeBytes(5, instance.inputAudio);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get queryParams() {
        return this._queryParams;
    }
    set queryParams(value) {
        this._queryParams = value;
    }
    get queryInput() {
        return this._queryInput;
    }
    set queryInput(value) {
        this._queryInput = value;
    }
    get inputAudio() {
        return this._inputAudio;
    }
    set inputAudio(value) {
        this._inputAudio = value;
    }
    toObject() {
        return {
            session: this.session,
            queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
            queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
            inputAudio: this.inputAudio
                ? this.inputAudio.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DetectIntentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentResponse value
     */
    constructor(value) {
        value = value || {};
        this.responseId = value.responseId;
        this.queryResult = value.queryResult
            ? new QueryResult(value.queryResult)
            : undefined;
        this.webhookStatus = value.webhookStatus
            ? new Status(value.webhookStatus)
            : undefined;
        DetectIntentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectIntentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectIntentResponse();
        DetectIntentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responseId = instance.responseId || '';
        instance.queryResult = instance.queryResult || undefined;
        instance.webhookStatus = instance.webhookStatus || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.queryResult = new QueryResult();
                    reader.readMessage(instance.queryResult, QueryResult.fromBinaryReader);
                    break;
                case 3:
                    instance.webhookStatus = new Status();
                    reader.readMessage(instance.webhookStatus, Status.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectIntentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.queryResult) {
            writer.writeMessage(2, instance.queryResult, QueryResult.toBinaryWriter);
        }
        if (instance.webhookStatus) {
            writer.writeMessage(3, instance.webhookStatus, Status.toBinaryWriter);
        }
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get webhookStatus() {
        return this._webhookStatus;
    }
    set webhookStatus(value) {
        this._webhookStatus = value;
    }
    toObject() {
        return {
            responseId: this.responseId,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class QueryParameters {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryParameters value
     */
    constructor(value) {
        value = value || {};
        this.timeZone = value.timeZone;
        this.geoLocation = value.geoLocation
            ? new LatLng(value.geoLocation)
            : undefined;
        this.contexts = (value.contexts || []).map(m => new Context(m));
        this.resetContexts = value.resetContexts;
        this.payload = value.payload
            ? new Struct(value.payload)
            : undefined;
        QueryParameters.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryParameters.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryParameters();
        QueryParameters.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.timeZone = instance.timeZone || '';
        instance.geoLocation = instance.geoLocation || undefined;
        instance.contexts = instance.contexts || [];
        instance.resetContexts = instance.resetContexts || false;
        instance.payload = instance.payload || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.timeZone = reader.readString();
                    break;
                case 2:
                    instance.geoLocation = new LatLng();
                    reader.readMessage(instance.geoLocation, LatLng.fromBinaryReader);
                    break;
                case 3:
                    const messageInitializer3 = new Context();
                    reader.readMessage(messageInitializer3, Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.resetContexts = reader.readBool();
                    break;
                case 6:
                    instance.payload = new Struct();
                    reader.readMessage(instance.payload, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryParameters.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.timeZone) {
            writer.writeString(1, instance.timeZone);
        }
        if (instance.geoLocation) {
            writer.writeMessage(2, instance.geoLocation, LatLng.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(3, instance.contexts, Context.toBinaryWriter);
        }
        if (instance.resetContexts) {
            writer.writeBool(4, instance.resetContexts);
        }
        if (instance.payload) {
            writer.writeMessage(6, instance.payload, Struct.toBinaryWriter);
        }
    }
    get timeZone() {
        return this._timeZone;
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    get geoLocation() {
        return this._geoLocation;
    }
    set geoLocation(value) {
        this._geoLocation = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get resetContexts() {
        return this._resetContexts;
    }
    set resetContexts(value) {
        this._resetContexts = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    toObject() {
        return {
            timeZone: this.timeZone,
            geoLocation: this.geoLocation ? this.geoLocation.toObject() : undefined,
            contexts: (this.contexts || []).map(m => m.toObject()),
            resetContexts: this.resetContexts,
            payload: this.payload ? this.payload.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class QueryInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryInput value
     */
    constructor(value) {
        this._input = QueryInput.InputCase.none;
        value = value || {};
        this.audioConfig = value.audioConfig
            ? new InputAudioConfig(value.audioConfig)
            : undefined;
        this.text = value.text ? new TextInput(value.text) : undefined;
        this.event = value.event ? new EventInput(value.event) : undefined;
        QueryInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryInput();
        QueryInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.audioConfig = new InputAudioConfig();
                    reader.readMessage(instance.audioConfig, InputAudioConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.text = new TextInput();
                    reader.readMessage(instance.text, TextInput.fromBinaryReader);
                    break;
                case 3:
                    instance.event = new EventInput();
                    reader.readMessage(instance.event, EventInput.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.audioConfig) {
            writer.writeMessage(1, instance.audioConfig, InputAudioConfig.toBinaryWriter);
        }
        if (instance.text) {
            writer.writeMessage(2, instance.text, TextInput.toBinaryWriter);
        }
        if (instance.event) {
            writer.writeMessage(3, instance.event, EventInput.toBinaryWriter);
        }
    }
    get audioConfig() {
        return this._audioConfig;
    }
    set audioConfig(value) {
        if (value !== undefined && value !== null) {
            this._text = this._event = undefined;
            this._input = QueryInput.InputCase.audioConfig;
        }
        this._audioConfig = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._audioConfig = this._event = undefined;
            this._input = QueryInput.InputCase.text;
        }
        this._text = value;
    }
    get event() {
        return this._event;
    }
    set event(value) {
        if (value !== undefined && value !== null) {
            this._audioConfig = this._text = undefined;
            this._input = QueryInput.InputCase.event;
        }
        this._event = value;
    }
    get input() {
        return this._input;
    }
    toObject() {
        return {
            audioConfig: this.audioConfig ? this.audioConfig.toObject() : undefined,
            text: this.text ? this.text.toObject() : undefined,
            event: this.event ? this.event.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (QueryInput) {
    let InputCase;
    (function (InputCase) {
        InputCase[InputCase["none"] = 0] = "none";
        InputCase[InputCase["audioConfig"] = 1] = "audioConfig";
        InputCase[InputCase["text"] = 2] = "text";
        InputCase[InputCase["event"] = 3] = "event";
    })(InputCase = QueryInput.InputCase || (QueryInput.InputCase = {}));
})(QueryInput || (QueryInput = {}));
class QueryResult {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryResult value
     */
    constructor(value) {
        value = value || {};
        this.queryText = value.queryText;
        this.languageCode = value.languageCode;
        this.speechRecognitionConfidence = value.speechRecognitionConfidence;
        this.action = value.action;
        this.parameters = value.parameters
            ? new Struct(value.parameters)
            : undefined;
        this.allRequiredParamsPresent = value.allRequiredParamsPresent;
        this.fulfillmentText = value.fulfillmentText;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new Intent.Message(m));
        this.webhookSource = value.webhookSource;
        this.webhookPayload = value.webhookPayload
            ? new Struct(value.webhookPayload)
            : undefined;
        this.outputContexts = (value.outputContexts || []).map(m => new Context(m));
        this.intent = value.intent
            ? new Intent(value.intent)
            : undefined;
        this.intentDetectionConfidence = value.intentDetectionConfidence;
        this.diagnosticInfo = value.diagnosticInfo
            ? new Struct(value.diagnosticInfo)
            : undefined;
        QueryResult.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryResult.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryResult();
        QueryResult.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.queryText = instance.queryText || '';
        instance.languageCode = instance.languageCode || '';
        instance.speechRecognitionConfidence =
            instance.speechRecognitionConfidence || 0;
        instance.action = instance.action || '';
        instance.parameters = instance.parameters || undefined;
        instance.allRequiredParamsPresent =
            instance.allRequiredParamsPresent || false;
        instance.fulfillmentText = instance.fulfillmentText || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.webhookSource = instance.webhookSource || '';
        instance.webhookPayload = instance.webhookPayload || undefined;
        instance.outputContexts = instance.outputContexts || [];
        instance.intent = instance.intent || undefined;
        instance.intentDetectionConfidence =
            instance.intentDetectionConfidence || 0;
        instance.diagnosticInfo = instance.diagnosticInfo || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.queryText = reader.readString();
                    break;
                case 15:
                    instance.languageCode = reader.readString();
                    break;
                case 2:
                    instance.speechRecognitionConfidence = reader.readFloat();
                    break;
                case 3:
                    instance.action = reader.readString();
                    break;
                case 4:
                    instance.parameters = new Struct();
                    reader.readMessage(instance.parameters, Struct.fromBinaryReader);
                    break;
                case 5:
                    instance.allRequiredParamsPresent = reader.readBool();
                    break;
                case 6:
                    instance.fulfillmentText = reader.readString();
                    break;
                case 7:
                    const messageInitializer7 = new Intent.Message();
                    reader.readMessage(messageInitializer7, Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer7);
                    break;
                case 8:
                    instance.webhookSource = reader.readString();
                    break;
                case 9:
                    instance.webhookPayload = new Struct();
                    reader.readMessage(instance.webhookPayload, Struct.fromBinaryReader);
                    break;
                case 10:
                    const messageInitializer10 = new Context();
                    reader.readMessage(messageInitializer10, Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer10);
                    break;
                case 11:
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 12:
                    instance.intentDetectionConfidence = reader.readFloat();
                    break;
                case 14:
                    instance.diagnosticInfo = new Struct();
                    reader.readMessage(instance.diagnosticInfo, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryResult.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.queryText) {
            writer.writeString(1, instance.queryText);
        }
        if (instance.languageCode) {
            writer.writeString(15, instance.languageCode);
        }
        if (instance.speechRecognitionConfidence) {
            writer.writeFloat(2, instance.speechRecognitionConfidence);
        }
        if (instance.action) {
            writer.writeString(3, instance.action);
        }
        if (instance.parameters) {
            writer.writeMessage(4, instance.parameters, Struct.toBinaryWriter);
        }
        if (instance.allRequiredParamsPresent) {
            writer.writeBool(5, instance.allRequiredParamsPresent);
        }
        if (instance.fulfillmentText) {
            writer.writeString(6, instance.fulfillmentText);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(7, instance.fulfillmentMessages, Intent.Message.toBinaryWriter);
        }
        if (instance.webhookSource) {
            writer.writeString(8, instance.webhookSource);
        }
        if (instance.webhookPayload) {
            writer.writeMessage(9, instance.webhookPayload, Struct.toBinaryWriter);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(10, instance.outputContexts, Context.toBinaryWriter);
        }
        if (instance.intent) {
            writer.writeMessage(11, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.intentDetectionConfidence) {
            writer.writeFloat(12, instance.intentDetectionConfidence);
        }
        if (instance.diagnosticInfo) {
            writer.writeMessage(14, instance.diagnosticInfo, Struct.toBinaryWriter);
        }
    }
    get queryText() {
        return this._queryText;
    }
    set queryText(value) {
        this._queryText = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get speechRecognitionConfidence() {
        return this._speechRecognitionConfidence;
    }
    set speechRecognitionConfidence(value) {
        this._speechRecognitionConfidence = value;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get allRequiredParamsPresent() {
        return this._allRequiredParamsPresent;
    }
    set allRequiredParamsPresent(value) {
        this._allRequiredParamsPresent = value;
    }
    get fulfillmentText() {
        return this._fulfillmentText;
    }
    set fulfillmentText(value) {
        this._fulfillmentText = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get webhookSource() {
        return this._webhookSource;
    }
    set webhookSource(value) {
        this._webhookSource = value;
    }
    get webhookPayload() {
        return this._webhookPayload;
    }
    set webhookPayload(value) {
        this._webhookPayload = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get intentDetectionConfidence() {
        return this._intentDetectionConfidence;
    }
    set intentDetectionConfidence(value) {
        this._intentDetectionConfidence = value;
    }
    get diagnosticInfo() {
        return this._diagnosticInfo;
    }
    set diagnosticInfo(value) {
        this._diagnosticInfo = value;
    }
    toObject() {
        return {
            queryText: this.queryText,
            languageCode: this.languageCode,
            speechRecognitionConfidence: this.speechRecognitionConfidence,
            action: this.action,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            allRequiredParamsPresent: this.allRequiredParamsPresent,
            fulfillmentText: this.fulfillmentText,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            webhookSource: this.webhookSource,
            webhookPayload: this.webhookPayload
                ? this.webhookPayload.toObject()
                : undefined,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            intent: this.intent ? this.intent.toObject() : undefined,
            intentDetectionConfidence: this.intentDetectionConfidence,
            diagnosticInfo: this.diagnosticInfo
                ? this.diagnosticInfo.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class StreamingDetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.queryParams = value.queryParams
            ? new QueryParameters(value.queryParams)
            : undefined;
        this.queryInput = value.queryInput
            ? new QueryInput(value.queryInput)
            : undefined;
        this.singleUtterance = value.singleUtterance;
        this.inputAudio = value.inputAudio;
        StreamingDetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingDetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingDetectIntentRequest();
        StreamingDetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.queryParams = instance.queryParams || undefined;
        instance.queryInput = instance.queryInput || undefined;
        instance.singleUtterance = instance.singleUtterance || false;
        instance.inputAudio = instance.inputAudio || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                case 2:
                    instance.queryParams = new QueryParameters();
                    reader.readMessage(instance.queryParams, QueryParameters.fromBinaryReader);
                    break;
                case 3:
                    instance.queryInput = new QueryInput();
                    reader.readMessage(instance.queryInput, QueryInput.fromBinaryReader);
                    break;
                case 4:
                    instance.singleUtterance = reader.readBool();
                    break;
                case 6:
                    instance.inputAudio = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingDetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
        if (instance.queryParams) {
            writer.writeMessage(2, instance.queryParams, QueryParameters.toBinaryWriter);
        }
        if (instance.queryInput) {
            writer.writeMessage(3, instance.queryInput, QueryInput.toBinaryWriter);
        }
        if (instance.singleUtterance) {
            writer.writeBool(4, instance.singleUtterance);
        }
        if (instance.inputAudio && instance.inputAudio.length) {
            writer.writeBytes(6, instance.inputAudio);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get queryParams() {
        return this._queryParams;
    }
    set queryParams(value) {
        this._queryParams = value;
    }
    get queryInput() {
        return this._queryInput;
    }
    set queryInput(value) {
        this._queryInput = value;
    }
    get singleUtterance() {
        return this._singleUtterance;
    }
    set singleUtterance(value) {
        this._singleUtterance = value;
    }
    get inputAudio() {
        return this._inputAudio;
    }
    set inputAudio(value) {
        this._inputAudio = value;
    }
    toObject() {
        return {
            session: this.session,
            queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
            queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
            singleUtterance: this.singleUtterance,
            inputAudio: this.inputAudio
                ? this.inputAudio.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class StreamingDetectIntentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentResponse value
     */
    constructor(value) {
        value = value || {};
        this.responseId = value.responseId;
        this.recognitionResult = value.recognitionResult
            ? new StreamingRecognitionResult(value.recognitionResult)
            : undefined;
        this.queryResult = value.queryResult
            ? new QueryResult(value.queryResult)
            : undefined;
        this.webhookStatus = value.webhookStatus
            ? new Status(value.webhookStatus)
            : undefined;
        StreamingDetectIntentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingDetectIntentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingDetectIntentResponse();
        StreamingDetectIntentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responseId = instance.responseId || '';
        instance.recognitionResult = instance.recognitionResult || undefined;
        instance.queryResult = instance.queryResult || undefined;
        instance.webhookStatus = instance.webhookStatus || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.recognitionResult = new StreamingRecognitionResult();
                    reader.readMessage(instance.recognitionResult, StreamingRecognitionResult.fromBinaryReader);
                    break;
                case 3:
                    instance.queryResult = new QueryResult();
                    reader.readMessage(instance.queryResult, QueryResult.fromBinaryReader);
                    break;
                case 4:
                    instance.webhookStatus = new Status();
                    reader.readMessage(instance.webhookStatus, Status.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingDetectIntentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.recognitionResult) {
            writer.writeMessage(2, instance.recognitionResult, StreamingRecognitionResult.toBinaryWriter);
        }
        if (instance.queryResult) {
            writer.writeMessage(3, instance.queryResult, QueryResult.toBinaryWriter);
        }
        if (instance.webhookStatus) {
            writer.writeMessage(4, instance.webhookStatus, Status.toBinaryWriter);
        }
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get recognitionResult() {
        return this._recognitionResult;
    }
    set recognitionResult(value) {
        this._recognitionResult = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get webhookStatus() {
        return this._webhookStatus;
    }
    set webhookStatus(value) {
        this._webhookStatus = value;
    }
    toObject() {
        return {
            responseId: this.responseId,
            recognitionResult: this.recognitionResult
                ? this.recognitionResult.toObject()
                : undefined,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class StreamingRecognitionResult {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingRecognitionResult value
     */
    constructor(value) {
        value = value || {};
        this.messageType = value.messageType;
        this.transcript = value.transcript;
        this.isFinal = value.isFinal;
        this.confidence = value.confidence;
        StreamingRecognitionResult.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingRecognitionResult.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingRecognitionResult();
        StreamingRecognitionResult.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.messageType = instance.messageType || 0;
        instance.transcript = instance.transcript || '';
        instance.isFinal = instance.isFinal || false;
        instance.confidence = instance.confidence || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.messageType = reader.readEnum();
                    break;
                case 2:
                    instance.transcript = reader.readString();
                    break;
                case 3:
                    instance.isFinal = reader.readBool();
                    break;
                case 4:
                    instance.confidence = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingRecognitionResult.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.messageType) {
            writer.writeEnum(1, instance.messageType);
        }
        if (instance.transcript) {
            writer.writeString(2, instance.transcript);
        }
        if (instance.isFinal) {
            writer.writeBool(3, instance.isFinal);
        }
        if (instance.confidence) {
            writer.writeFloat(4, instance.confidence);
        }
    }
    get messageType() {
        return this._messageType;
    }
    set messageType(value) {
        this._messageType = value;
    }
    get transcript() {
        return this._transcript;
    }
    set transcript(value) {
        this._transcript = value;
    }
    get isFinal() {
        return this._isFinal;
    }
    set isFinal(value) {
        this._isFinal = value;
    }
    get confidence() {
        return this._confidence;
    }
    set confidence(value) {
        this._confidence = value;
    }
    toObject() {
        return {
            messageType: this.messageType,
            transcript: this.transcript,
            isFinal: this.isFinal,
            confidence: this.confidence
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (StreamingRecognitionResult) {
    let MessageType;
    (function (MessageType) {
        MessageType[MessageType["messageTypeUnspecified"] = 0] = "messageTypeUnspecified";
        MessageType[MessageType["transcript"] = 1] = "transcript";
        MessageType[MessageType["endOfSingleUtterance"] = 2] = "endOfSingleUtterance";
    })(MessageType = StreamingRecognitionResult.MessageType || (StreamingRecognitionResult.MessageType = {}));
})(StreamingRecognitionResult || (StreamingRecognitionResult = {}));
class InputAudioConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param InputAudioConfig value
     */
    constructor(value) {
        value = value || {};
        this.audioEncoding = value.audioEncoding;
        this.sampleRateHertz = value.sampleRateHertz;
        this.languageCode = value.languageCode;
        this.phraseHints = (value.phraseHints || []).slice();
        InputAudioConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        InputAudioConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new InputAudioConfig();
        InputAudioConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.audioEncoding = instance.audioEncoding || 0;
        instance.sampleRateHertz = instance.sampleRateHertz || 0;
        instance.languageCode = instance.languageCode || '';
        instance.phraseHints = instance.phraseHints || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.audioEncoding = reader.readEnum();
                    break;
                case 2:
                    instance.sampleRateHertz = reader.readInt32();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    (instance.phraseHints = instance.phraseHints || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        InputAudioConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.audioEncoding) {
            writer.writeEnum(1, instance.audioEncoding);
        }
        if (instance.sampleRateHertz) {
            writer.writeInt32(2, instance.sampleRateHertz);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.phraseHints && instance.phraseHints.length) {
            writer.writeRepeatedString(4, instance.phraseHints);
        }
    }
    get audioEncoding() {
        return this._audioEncoding;
    }
    set audioEncoding(value) {
        this._audioEncoding = value;
    }
    get sampleRateHertz() {
        return this._sampleRateHertz;
    }
    set sampleRateHertz(value) {
        this._sampleRateHertz = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get phraseHints() {
        return this._phraseHints;
    }
    set phraseHints(value) {
        this._phraseHints = value;
    }
    toObject() {
        return {
            audioEncoding: this.audioEncoding,
            sampleRateHertz: this.sampleRateHertz,
            languageCode: this.languageCode,
            phraseHints: (this.phraseHints || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class TextInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param TextInput value
     */
    constructor(value) {
        value = value || {};
        this.text = value.text;
        this.languageCode = value.languageCode;
        TextInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TextInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TextInput();
        TextInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.text = instance.text || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.text = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        TextInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.text) {
            writer.writeString(1, instance.text);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            text: this.text,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EventInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param EventInput value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.parameters = value.parameters
            ? new Struct(value.parameters)
            : undefined;
        this.languageCode = value.languageCode;
        EventInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EventInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EventInput();
        EventInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.parameters = instance.parameters || undefined;
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.parameters = new Struct();
                    reader.readMessage(instance.parameters, Struct.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        EventInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.parameters) {
            writer.writeMessage(2, instance.parameters, Struct.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            name: this.name,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Session {
    /**
     * Creates an object and applies default Protobuf values
     * @param Session value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionSteps = (value.sessionSteps || []).map(m => new SessionStep(m));
        this.sessionInfo = value.sessionInfo
            ? new SessionInfo(value.sessionInfo)
            : undefined;
        Session.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Session.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Session();
        Session.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionSteps = instance.sessionSteps || [];
        instance.sessionInfo = instance.sessionInfo || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionStep();
                    reader.readMessage(messageInitializer2, SessionStep.fromBinaryReader);
                    (instance.sessionSteps = instance.sessionSteps || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.sessionInfo = new SessionInfo();
                    reader.readMessage(instance.sessionInfo, SessionInfo.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Session.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionSteps && instance.sessionSteps.length) {
            writer.writeRepeatedMessage(2, instance.sessionSteps, SessionStep.toBinaryWriter);
        }
        if (instance.sessionInfo) {
            writer.writeMessage(3, instance.sessionInfo, SessionInfo.toBinaryWriter);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionSteps() {
        return this._sessionSteps;
    }
    set sessionSteps(value) {
        this._sessionSteps = value;
    }
    get sessionInfo() {
        return this._sessionInfo;
    }
    set sessionInfo(value) {
        this._sessionInfo = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionSteps: (this.sessionSteps || []).map(m => m.toObject()),
            sessionInfo: this.sessionInfo ? this.sessionInfo.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Session) {
    let View;
    (function (View) {
        View[View["viewUnspecified"] = 0] = "viewUnspecified";
        View[View["viewFull"] = 1] = "viewFull";
        View[View["viewSparse"] = 2] = "viewSparse";
    })(View = Session.View || (Session.View = {}));
})(Session || (Session = {}));
class SessionStep {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionStep value
     */
    constructor(value) {
        value = value || {};
        this.detectIntentRequest = value.detectIntentRequest
            ? new DetectIntentRequest(value.detectIntentRequest)
            : undefined;
        this.detectIntentResponse = value.detectIntentResponse
            ? new DetectIntentResponse(value.detectIntentResponse)
            : undefined;
        this.contexts = (value.contexts || []).map(m => new Context(m));
        SessionStep.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionStep.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionStep();
        SessionStep.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.detectIntentRequest = instance.detectIntentRequest || undefined;
        instance.detectIntentResponse = instance.detectIntentResponse || undefined;
        instance.contexts = instance.contexts || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.detectIntentRequest = new DetectIntentRequest();
                    reader.readMessage(instance.detectIntentRequest, DetectIntentRequest.fromBinaryReader);
                    break;
                case 2:
                    instance.detectIntentResponse = new DetectIntentResponse();
                    reader.readMessage(instance.detectIntentResponse, DetectIntentResponse.fromBinaryReader);
                    break;
                case 3:
                    const messageInitializer3 = new Context();
                    reader.readMessage(messageInitializer3, Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer3);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionStep.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.detectIntentRequest) {
            writer.writeMessage(1, instance.detectIntentRequest, DetectIntentRequest.toBinaryWriter);
        }
        if (instance.detectIntentResponse) {
            writer.writeMessage(2, instance.detectIntentResponse, DetectIntentResponse.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(3, instance.contexts, Context.toBinaryWriter);
        }
    }
    get detectIntentRequest() {
        return this._detectIntentRequest;
    }
    set detectIntentRequest(value) {
        this._detectIntentRequest = value;
    }
    get detectIntentResponse() {
        return this._detectIntentResponse;
    }
    set detectIntentResponse(value) {
        this._detectIntentResponse = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    toObject() {
        return {
            detectIntentRequest: this.detectIntentRequest
                ? this.detectIntentRequest.toObject()
                : undefined,
            detectIntentResponse: this.detectIntentResponse
                ? this.detectIntentResponse.toObject()
                : undefined,
            contexts: (this.contexts || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class TrackSessionStepRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TrackSessionStepRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionStep = value.sessionStep
            ? new SessionStep(value.sessionStep)
            : undefined;
        this.sessionView = value.sessionView;
        TrackSessionStepRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TrackSessionStepRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TrackSessionStepRequest();
        TrackSessionStepRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionStep = instance.sessionStep || undefined;
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionStep = new SessionStep();
                    reader.readMessage(instance.sessionStep, SessionStep.fromBinaryReader);
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        TrackSessionStepRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionStep) {
            writer.writeMessage(2, instance.sessionStep, SessionStep.toBinaryWriter);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionStep() {
        return this._sessionStep;
    }
    set sessionStep(value) {
        this._sessionStep = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.sessionView = value.sessionView;
        this.pageToken = value.pageToken;
        this.sessionFilter = value.sessionFilter
            ? new SessionFilter(value.sessionFilter)
            : undefined;
        ListSessionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionsRequest();
        ListSessionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.sessionView = instance.sessionView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.sessionFilter = instance.sessionFilter || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.sessionView = reader.readEnum();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                case 5:
                    instance.sessionFilter = new SessionFilter();
                    reader.readMessage(instance.sessionFilter, SessionFilter.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.sessionView) {
            writer.writeEnum(2, instance.sessionView);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
        }
        if (instance.sessionFilter) {
            writer.writeMessage(5, instance.sessionFilter, SessionFilter.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get sessionFilter() {
        return this._sessionFilter;
    }
    set sessionFilter(value) {
        this._sessionFilter = value;
    }
    toObject() {
        return {
            parent: this.parent,
            sessionView: this.sessionView,
            pageToken: this.pageToken,
            sessionFilter: this.sessionFilter
                ? this.sessionFilter.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class SessionFilter {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionFilter value
     */
    constructor(value) {
        value = value || {};
        this.languageCodes = (value.languageCodes || []).slice();
        this.matchedIntents = (value.matchedIntents || []).map(m => new Intent(m));
        this.matchedEntityTypes = (value.matchedEntityTypes || []).map(m => new EntityType(m));
        this.minIntentsConfidenceMin = value.minIntentsConfidenceMin;
        this.minIntentsConfidenceMax = value.minIntentsConfidenceMax;
        this.minEntityTypesConfidenceMin = value.minEntityTypesConfidenceMin;
        this.minEntityTypesConfidenceMax = value.minEntityTypesConfidenceMax;
        this.earliest = value.earliest;
        this.latest = value.latest;
        this.minNumberTurns = value.minNumberTurns;
        this.maxNumberTurns = value.maxNumberTurns;
        this.labels = (value.labels || []).slice();
        this.userIds = (value.userIds || []).slice();
        SessionFilter.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionFilter.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionFilter();
        SessionFilter.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCodes = instance.languageCodes || [];
        instance.matchedIntents = instance.matchedIntents || [];
        instance.matchedEntityTypes = instance.matchedEntityTypes || [];
        instance.minIntentsConfidenceMin = instance.minIntentsConfidenceMin || 0;
        instance.minIntentsConfidenceMax = instance.minIntentsConfidenceMax || 0;
        instance.minEntityTypesConfidenceMin =
            instance.minEntityTypesConfidenceMin || 0;
        instance.minEntityTypesConfidenceMax =
            instance.minEntityTypesConfidenceMax || 0;
        instance.earliest = instance.earliest || 0;
        instance.latest = instance.latest || 0;
        instance.minNumberTurns = instance.minNumberTurns || 0;
        instance.maxNumberTurns = instance.maxNumberTurns || 0;
        instance.labels = instance.labels || [];
        instance.userIds = instance.userIds || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new Intent();
                    reader.readMessage(messageInitializer2, Intent.fromBinaryReader);
                    (instance.matchedIntents = instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new EntityType();
                    reader.readMessage(messageInitializer3, EntityType.fromBinaryReader);
                    (instance.matchedEntityTypes =
                        instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.minIntentsConfidenceMin = reader.readFloat();
                    break;
                case 5:
                    instance.minIntentsConfidenceMax = reader.readFloat();
                    break;
                case 6:
                    instance.minEntityTypesConfidenceMin = reader.readFloat();
                    break;
                case 7:
                    instance.minEntityTypesConfidenceMax = reader.readFloat();
                    break;
                case 8:
                    instance.earliest = reader.readFloat();
                    break;
                case 9:
                    instance.latest = reader.readFloat();
                    break;
                case 10:
                    instance.minNumberTurns = reader.readInt32();
                    break;
                case 11:
                    instance.maxNumberTurns = reader.readInt32();
                    break;
                case 12:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 13:
                    (instance.userIds = instance.userIds || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionFilter.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(1, instance.languageCodes);
        }
        if (instance.matchedIntents && instance.matchedIntents.length) {
            writer.writeRepeatedMessage(2, instance.matchedIntents, Intent.toBinaryWriter);
        }
        if (instance.matchedEntityTypes && instance.matchedEntityTypes.length) {
            writer.writeRepeatedMessage(3, instance.matchedEntityTypes, EntityType.toBinaryWriter);
        }
        if (instance.minIntentsConfidenceMin) {
            writer.writeFloat(4, instance.minIntentsConfidenceMin);
        }
        if (instance.minIntentsConfidenceMax) {
            writer.writeFloat(5, instance.minIntentsConfidenceMax);
        }
        if (instance.minEntityTypesConfidenceMin) {
            writer.writeFloat(6, instance.minEntityTypesConfidenceMin);
        }
        if (instance.minEntityTypesConfidenceMax) {
            writer.writeFloat(7, instance.minEntityTypesConfidenceMax);
        }
        if (instance.earliest) {
            writer.writeFloat(8, instance.earliest);
        }
        if (instance.latest) {
            writer.writeFloat(9, instance.latest);
        }
        if (instance.minNumberTurns) {
            writer.writeInt32(10, instance.minNumberTurns);
        }
        if (instance.maxNumberTurns) {
            writer.writeInt32(11, instance.maxNumberTurns);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(12, instance.labels);
        }
        if (instance.userIds && instance.userIds.length) {
            writer.writeRepeatedString(13, instance.userIds);
        }
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get matchedIntents() {
        return this._matchedIntents;
    }
    set matchedIntents(value) {
        this._matchedIntents = value;
    }
    get matchedEntityTypes() {
        return this._matchedEntityTypes;
    }
    set matchedEntityTypes(value) {
        this._matchedEntityTypes = value;
    }
    get minIntentsConfidenceMin() {
        return this._minIntentsConfidenceMin;
    }
    set minIntentsConfidenceMin(value) {
        this._minIntentsConfidenceMin = value;
    }
    get minIntentsConfidenceMax() {
        return this._minIntentsConfidenceMax;
    }
    set minIntentsConfidenceMax(value) {
        this._minIntentsConfidenceMax = value;
    }
    get minEntityTypesConfidenceMin() {
        return this._minEntityTypesConfidenceMin;
    }
    set minEntityTypesConfidenceMin(value) {
        this._minEntityTypesConfidenceMin = value;
    }
    get minEntityTypesConfidenceMax() {
        return this._minEntityTypesConfidenceMax;
    }
    set minEntityTypesConfidenceMax(value) {
        this._minEntityTypesConfidenceMax = value;
    }
    get earliest() {
        return this._earliest;
    }
    set earliest(value) {
        this._earliest = value;
    }
    get latest() {
        return this._latest;
    }
    set latest(value) {
        this._latest = value;
    }
    get minNumberTurns() {
        return this._minNumberTurns;
    }
    set minNumberTurns(value) {
        this._minNumberTurns = value;
    }
    get maxNumberTurns() {
        return this._maxNumberTurns;
    }
    set maxNumberTurns(value) {
        this._maxNumberTurns = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get userIds() {
        return this._userIds;
    }
    set userIds(value) {
        this._userIds = value;
    }
    toObject() {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toObject()),
            minIntentsConfidenceMin: this.minIntentsConfidenceMin,
            minIntentsConfidenceMax: this.minIntentsConfidenceMax,
            minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
            minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
            earliest: this.earliest,
            latest: this.latest,
            minNumberTurns: this.minNumberTurns,
            maxNumberTurns: this.maxNumberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class SessionInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionInfo value
     */
    constructor(value) {
        value = value || {};
        this.languageCodes = (value.languageCodes || []).slice();
        this.matchedIntents = (value.matchedIntents || []).map(m => new Intent(m));
        this.matchedEntityTypes = (value.matchedEntityTypes || []).map(m => new EntityType(m));
        this.minIntentsConfidence = value.minIntentsConfidence;
        this.minEntityTypesConfidence = value.minEntityTypesConfidence;
        this.earliest = value.earliest;
        this.latest = value.latest;
        this.numberTurns = value.numberTurns;
        this.labels = (value.labels || []).slice();
        this.userIds = (value.userIds || []).slice();
        SessionInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionInfo();
        SessionInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCodes = instance.languageCodes || [];
        instance.matchedIntents = instance.matchedIntents || [];
        instance.matchedEntityTypes = instance.matchedEntityTypes || [];
        instance.minIntentsConfidence = instance.minIntentsConfidence || 0;
        instance.minEntityTypesConfidence = instance.minEntityTypesConfidence || 0;
        instance.earliest = instance.earliest || 0;
        instance.latest = instance.latest || 0;
        instance.numberTurns = instance.numberTurns || 0;
        instance.labels = instance.labels || [];
        instance.userIds = instance.userIds || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new Intent();
                    reader.readMessage(messageInitializer2, Intent.fromBinaryReader);
                    (instance.matchedIntents = instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new EntityType();
                    reader.readMessage(messageInitializer3, EntityType.fromBinaryReader);
                    (instance.matchedEntityTypes =
                        instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.minIntentsConfidence = reader.readFloat();
                    break;
                case 5:
                    instance.minEntityTypesConfidence = reader.readFloat();
                    break;
                case 6:
                    instance.earliest = reader.readFloat();
                    break;
                case 7:
                    instance.latest = reader.readFloat();
                    break;
                case 8:
                    instance.numberTurns = reader.readInt32();
                    break;
                case 9:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 10:
                    (instance.userIds = instance.userIds || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(1, instance.languageCodes);
        }
        if (instance.matchedIntents && instance.matchedIntents.length) {
            writer.writeRepeatedMessage(2, instance.matchedIntents, Intent.toBinaryWriter);
        }
        if (instance.matchedEntityTypes && instance.matchedEntityTypes.length) {
            writer.writeRepeatedMessage(3, instance.matchedEntityTypes, EntityType.toBinaryWriter);
        }
        if (instance.minIntentsConfidence) {
            writer.writeFloat(4, instance.minIntentsConfidence);
        }
        if (instance.minEntityTypesConfidence) {
            writer.writeFloat(5, instance.minEntityTypesConfidence);
        }
        if (instance.earliest) {
            writer.writeFloat(6, instance.earliest);
        }
        if (instance.latest) {
            writer.writeFloat(7, instance.latest);
        }
        if (instance.numberTurns) {
            writer.writeInt32(8, instance.numberTurns);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(9, instance.labels);
        }
        if (instance.userIds && instance.userIds.length) {
            writer.writeRepeatedString(10, instance.userIds);
        }
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get matchedIntents() {
        return this._matchedIntents;
    }
    set matchedIntents(value) {
        this._matchedIntents = value;
    }
    get matchedEntityTypes() {
        return this._matchedEntityTypes;
    }
    set matchedEntityTypes(value) {
        this._matchedEntityTypes = value;
    }
    get minIntentsConfidence() {
        return this._minIntentsConfidence;
    }
    set minIntentsConfidence(value) {
        this._minIntentsConfidence = value;
    }
    get minEntityTypesConfidence() {
        return this._minEntityTypesConfidence;
    }
    set minEntityTypesConfidence(value) {
        this._minEntityTypesConfidence = value;
    }
    get earliest() {
        return this._earliest;
    }
    set earliest(value) {
        this._earliest = value;
    }
    get latest() {
        return this._latest;
    }
    set latest(value) {
        this._latest = value;
    }
    get numberTurns() {
        return this._numberTurns;
    }
    set numberTurns(value) {
        this._numberTurns = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get userIds() {
        return this._userIds;
    }
    set userIds(value) {
        this._userIds = value;
    }
    toObject() {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toObject()),
            minIntentsConfidence: this.minIntentsConfidence,
            minEntityTypesConfidence: this.minEntityTypesConfidence,
            earliest: this.earliest,
            latest: this.latest,
            numberTurns: this.numberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.sessions = (value.sessions || []).map(m => new Session(m));
        this.nextPageToken = value.nextPageToken;
        ListSessionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionsResponse();
        ListSessionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessions = instance.sessions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Session();
                    reader.readMessage(messageInitializer1, Session.fromBinaryReader);
                    (instance.sessions = instance.sessions || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessions && instance.sessions.length) {
            writer.writeRepeatedMessage(1, instance.sessions, Session.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get sessions() {
        return this._sessions;
    }
    set sessions(value) {
        this._sessions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            sessions: (this.sessions || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetSessionRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionView = value.sessionView;
        GetSessionRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSessionRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSessionRequest();
        GetSessionRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSessionRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionView) {
            writer.writeEnum(2, instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteSessionRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteSessionRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        DeleteSessionRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteSessionRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteSessionRequest();
        DeleteSessionRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteSessionRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.parentReviewId = value.parentReviewId;
        this.sessionReview = value.sessionReview
            ? new SessionReview(value.sessionReview)
            : undefined;
        this.sessionReviewView = value.sessionReviewView;
        CreateSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateSessionReviewRequest();
        CreateSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.parentReviewId = instance.parentReviewId || '';
        instance.sessionReview = instance.sessionReview || undefined;
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.parentReviewId = reader.readString();
                    break;
                case 3:
                    instance.sessionReview = new SessionReview();
                    reader.readMessage(instance.sessionReview, SessionReview.fromBinaryReader);
                    break;
                case 4:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.parentReviewId) {
            writer.writeString(2, instance.parentReviewId);
        }
        if (instance.sessionReview) {
            writer.writeMessage(3, instance.sessionReview, SessionReview.toBinaryWriter);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(4, instance.sessionReviewView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get parentReviewId() {
        return this._parentReviewId;
    }
    set parentReviewId(value) {
        this._parentReviewId = value;
    }
    get sessionReview() {
        return this._sessionReview;
    }
    set sessionReview(value) {
        this._sessionReview = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            parentReviewId: this.parentReviewId,
            sessionReview: this.sessionReview
                ? this.sessionReview.toObject()
                : undefined,
            sessionReviewView: this.sessionReviewView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class SessionReview {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReview value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviewId = value.sessionReviewId;
        this.sessionReviewSteps = (value.sessionReviewSteps || []).map(m => new SessionReviewStep(m));
        SessionReview.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionReview.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionReview();
        SessionReview.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviewId = instance.sessionReviewId || '';
        instance.sessionReviewSteps = instance.sessionReviewSteps || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionReviewId = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionReviewStep();
                    reader.readMessage(messageInitializer2, SessionReviewStep.fromBinaryReader);
                    (instance.sessionReviewSteps =
                        instance.sessionReviewSteps || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionReview.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviewId) {
            writer.writeString(1, instance.sessionReviewId);
        }
        if (instance.sessionReviewSteps && instance.sessionReviewSteps.length) {
            writer.writeRepeatedMessage(2, instance.sessionReviewSteps, SessionReviewStep.toBinaryWriter);
        }
    }
    get sessionReviewId() {
        return this._sessionReviewId;
    }
    set sessionReviewId(value) {
        this._sessionReviewId = value;
    }
    get sessionReviewSteps() {
        return this._sessionReviewSteps;
    }
    set sessionReviewSteps(value) {
        this._sessionReviewSteps = value;
    }
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewSteps: (this.sessionReviewSteps || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (SessionReview) {
    let View;
    (function (View) {
        View[View["viewUnspecified"] = 0] = "viewUnspecified";
        View[View["viewFull"] = 1] = "viewFull";
        View[View["viewSparse"] = 2] = "viewSparse";
    })(View = SessionReview.View || (SessionReview.View = {}));
})(SessionReview || (SessionReview = {}));
class SessionReviewStep {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReviewStep value
     */
    constructor(value) {
        value = value || {};
        this.annotatedUsersays = value.annotatedUsersays
            ? new Intent.TrainingPhrase(value.annotatedUsersays)
            : undefined;
        this.languageCode = value.languageCode;
        this.detectedIntents = (value.detectedIntents || []).map(m => new DetectedIntent(m));
        this.contexts = (value.contexts || []).map(m => new Context(m));
        SessionReviewStep.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionReviewStep.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionReviewStep();
        SessionReviewStep.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.annotatedUsersays = instance.annotatedUsersays || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.detectedIntents = instance.detectedIntents || [];
        instance.contexts = instance.contexts || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.annotatedUsersays = new Intent.TrainingPhrase();
                    reader.readMessage(instance.annotatedUsersays, Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new DetectedIntent();
                    reader.readMessage(messageInitializer3, DetectedIntent.fromBinaryReader);
                    (instance.detectedIntents = instance.detectedIntents || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new Context();
                    reader.readMessage(messageInitializer4, Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer4);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionReviewStep.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.annotatedUsersays) {
            writer.writeMessage(1, instance.annotatedUsersays, Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.detectedIntents && instance.detectedIntents.length) {
            writer.writeRepeatedMessage(3, instance.detectedIntents, DetectedIntent.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(4, instance.contexts, Context.toBinaryWriter);
        }
    }
    get annotatedUsersays() {
        return this._annotatedUsersays;
    }
    set annotatedUsersays(value) {
        this._annotatedUsersays = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get detectedIntents() {
        return this._detectedIntents;
    }
    set detectedIntents(value) {
        this._detectedIntents = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    toObject() {
        return {
            annotatedUsersays: this.annotatedUsersays
                ? this.annotatedUsersays.toObject()
                : undefined,
            languageCode: this.languageCode,
            detectedIntents: (this.detectedIntents || []).map(m => m.toObject()),
            contexts: (this.contexts || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DetectedIntent {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectedIntent value
     */
    constructor(value) {
        value = value || {};
        this.intent = value.intent
            ? new Intent(value.intent)
            : undefined;
        this.score = value.score;
        this.algorithm = value.algorithm;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new Intent.Message(m));
        this.requiredParamMissing = value.requiredParamMissing;
        DetectedIntent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectedIntent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectedIntent();
        DetectedIntent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intent = instance.intent || undefined;
        instance.score = instance.score || 0;
        instance.algorithm = instance.algorithm || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.requiredParamMissing = instance.requiredParamMissing || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                case 3:
                    instance.algorithm = reader.readString();
                    break;
                case 4:
                    const messageInitializer4 = new Intent.Message();
                    reader.readMessage(messageInitializer4, Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer4);
                    break;
                case 5:
                    instance.requiredParamMissing = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectedIntent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intent) {
            writer.writeMessage(1, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
        }
        if (instance.algorithm) {
            writer.writeString(3, instance.algorithm);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(4, instance.fulfillmentMessages, Intent.Message.toBinaryWriter);
        }
        if (instance.requiredParamMissing) {
            writer.writeBool(5, instance.requiredParamMissing);
        }
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    get algorithm() {
        return this._algorithm;
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get requiredParamMissing() {
        return this._requiredParamMissing;
    }
    set requiredParamMissing(value) {
        this._requiredParamMissing = value;
    }
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            score: this.score,
            algorithm: this.algorithm,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            requiredParamMissing: this.requiredParamMissing
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        ListSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionLabelsRequest();
        ListSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionLabelsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsResponse value
     */
    constructor(value) {
        value = value || {};
        this.labels = (value.labels || []).slice();
        ListSessionLabelsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionLabelsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionLabelsResponse();
        ListSessionLabelsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.labels = instance.labels || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionLabelsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(1, instance.labels);
        }
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    toObject() {
        return {
            labels: (this.labels || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AddSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.labels = (value.labels || []).slice();
        this.sessionView = value.sessionView;
        AddSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddSessionLabelsRequest();
        AddSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.labels = instance.labels || [];
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(2, instance.labels);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class RemoveSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.labels = (value.labels || []).slice();
        this.sessionView = value.sessionView;
        RemoveSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RemoveSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RemoveSessionLabelsRequest();
        RemoveSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.labels = instance.labels || [];
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        RemoveSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(2, instance.labels);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionReviewsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionReviewView = value.sessionReviewView;
        this.pageToken = value.pageToken;
        ListSessionReviewsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionReviewsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionReviewsRequest();
        ListSessionReviewsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionReviewsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListSessionReviewsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsResponse value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviews = (value.sessionReviews || []).map(m => new SessionReview(m));
        this.nextPageToken = value.nextPageToken;
        ListSessionReviewsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionReviewsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionReviewsResponse();
        ListSessionReviewsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviews = instance.sessionReviews || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SessionReview();
                    reader.readMessage(messageInitializer1, SessionReview.fromBinaryReader);
                    (instance.sessionReviews = instance.sessionReviews || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionReviewsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviews && instance.sessionReviews.length) {
            writer.writeRepeatedMessage(1, instance.sessionReviews, SessionReview.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get sessionReviews() {
        return this._sessionReviews;
    }
    set sessionReviews(value) {
        this._sessionReviews = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            sessionReviews: (this.sessionReviews || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviewId = value.sessionReviewId;
        this.sessionReviewView = value.sessionReviewView;
        GetSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSessionReviewRequest();
        GetSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviewId = instance.sessionReviewId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionReviewId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviewId) {
            writer.writeString(1, instance.sessionReviewId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
        }
    }
    get sessionReviewId() {
        return this._sessionReviewId;
    }
    set sessionReviewId(value) {
        this._sessionReviewId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewView: this.sessionReviewView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetLatestSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetLatestSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionReviewView = value.sessionReviewView;
        GetLatestSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetLatestSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetLatestSessionReviewRequest();
        GetLatestSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetLatestSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class GetAnswerRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAnswerRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.text = value.text ? new TextInput(value.text) : undefined;
        this.maxNumAnswers = value.maxNumAnswers;
        this.thresholdReader = value.thresholdReader;
        this.thresholdRetriever = value.thresholdRetriever;
        this.thresholdOverall = value.thresholdOverall;
        this.readerModelName = value.readerModelName;
        GetAnswerRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAnswerRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAnswerRequest();
        GetAnswerRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.text = instance.text || undefined;
        instance.maxNumAnswers = instance.maxNumAnswers || 0;
        instance.thresholdReader = instance.thresholdReader || 0;
        instance.thresholdRetriever = instance.thresholdRetriever || 0;
        instance.thresholdOverall = instance.thresholdOverall || 0;
        instance.readerModelName = instance.readerModelName || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.text = new TextInput();
                    reader.readMessage(instance.text, TextInput.fromBinaryReader);
                    break;
                case 3:
                    instance.maxNumAnswers = reader.readInt32();
                    break;
                case 4:
                    instance.thresholdReader = reader.readFloat();
                    break;
                case 5:
                    instance.thresholdRetriever = reader.readFloat();
                    break;
                case 6:
                    instance.thresholdOverall = reader.readFloat();
                    break;
                case 7:
                    instance.readerModelName = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAnswerRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.text) {
            writer.writeMessage(2, instance.text, TextInput.toBinaryWriter);
        }
        if (instance.maxNumAnswers) {
            writer.writeInt32(3, instance.maxNumAnswers);
        }
        if (instance.thresholdReader) {
            writer.writeFloat(4, instance.thresholdReader);
        }
        if (instance.thresholdRetriever) {
            writer.writeFloat(5, instance.thresholdRetriever);
        }
        if (instance.thresholdOverall) {
            writer.writeFloat(6, instance.thresholdOverall);
        }
        if (instance.readerModelName) {
            writer.writeString(7, instance.readerModelName);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get maxNumAnswers() {
        return this._maxNumAnswers;
    }
    set maxNumAnswers(value) {
        this._maxNumAnswers = value;
    }
    get thresholdReader() {
        return this._thresholdReader;
    }
    set thresholdReader(value) {
        this._thresholdReader = value;
    }
    get thresholdRetriever() {
        return this._thresholdRetriever;
    }
    set thresholdRetriever(value) {
        this._thresholdRetriever = value;
    }
    get thresholdOverall() {
        return this._thresholdOverall;
    }
    set thresholdOverall(value) {
        this._thresholdOverall = value;
    }
    get readerModelName() {
        return this._readerModelName;
    }
    set readerModelName(value) {
        this._readerModelName = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId,
            text: this.text ? this.text.toObject() : undefined,
            maxNumAnswers: this.maxNumAnswers,
            thresholdReader: this.thresholdReader,
            thresholdRetriever: this.thresholdRetriever,
            thresholdOverall: this.thresholdOverall,
            readerModelName: this.readerModelName
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAnswerResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAnswerResponse value
     */
    constructor(value) {
        value = value || {};
        this.queryResult = value.queryResult
            ? new DetectIntentResponse(value.queryResult)
            : undefined;
        GetAnswerResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAnswerResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAnswerResponse();
        GetAnswerResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.queryResult = instance.queryResult || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    instance.queryResult = new DetectIntentResponse();
                    reader.readMessage(instance.queryResult, DetectIntentResponse.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAnswerResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.queryResult) {
            writer.writeMessage(2, instance.queryResult, DetectIntentResponse.toBinaryWriter);
        }
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    toObject() {
        return {
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class RunScraperResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param RunScraperResponse value
     */
    constructor(value) {
        value = value || {};
        this.containerName = value.containerName;
        this.containerId = value.containerId;
        RunScraperResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RunScraperResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RunScraperResponse();
        RunScraperResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.containerName = instance.containerName || '';
        instance.containerId = instance.containerId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.containerName = reader.readString();
                    break;
                case 2:
                    instance.containerId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        RunScraperResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.containerName) {
            writer.writeString(1, instance.containerName);
        }
        if (instance.containerId) {
            writer.writeString(2, instance.containerId);
        }
    }
    get containerName() {
        return this._containerName;
    }
    set containerName(value) {
        this._containerName = value;
    }
    get containerId() {
        return this._containerId;
    }
    set containerId(value) {
        this._containerId = value;
    }
    toObject() {
        return {
            containerName: this.containerName,
            containerId: this.containerId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class RunTrainingResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param RunTrainingResponse value
     */
    constructor(value) {
        value = value || {};
        this.f1 = value.f1;
        this.accuracy = value.accuracy;
        RunTrainingResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RunTrainingResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RunTrainingResponse();
        RunTrainingResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.f1 = instance.f1 || 0;
        instance.accuracy = instance.accuracy || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.f1 = reader.readFloat();
                    break;
                case 2:
                    instance.accuracy = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        RunTrainingResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.f1) {
            writer.writeFloat(1, instance.f1);
        }
        if (instance.accuracy) {
            writer.writeFloat(2, instance.accuracy);
        }
    }
    get f1() {
        return this._f1;
    }
    set f1(value) {
        this._f1 = value;
    }
    get accuracy() {
        return this._accuracy;
    }
    set accuracy(value) {
        this._accuracy = value;
    }
    toObject() {
        return {
            f1: this.f1,
            accuracy: this.accuracy
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Empty {
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Empty.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Empty();
        Empty.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default:
                    reader.skipField();
            }
        }
        Empty.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) { }
    /**
     * Creates an object and applies default Protobuf values
     * @param Empty value
     */
    constructor(value) {
        value = value || {};
        Empty.refineValues(this);
    }
    toObject() {
        return {};
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_QA_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_QA_CLIENT_SETTINGS = new InjectionToken('GRPC_QA_CLIENT_SETTINGS');

/* tslint:disable */
class QAClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.qa.QA', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAnswerResponse>
     */
    getAnswer(requestData, requestMetadata = {}) {
        return this.getAnswer$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAnswerResponse>>
     */
    getAnswer$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/GetAnswer',
            requestData,
            requestMetadata,
            requestClass: GetAnswerRequest,
            responseClass: GetAnswerResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunScraperResponse>
     */
    runScraper(requestData, requestMetadata = {}) {
        return this.runScraper$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunScraperResponse>>
     */
    runScraper$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/RunScraper',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: RunScraperResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunTrainingResponse>
     */
    runTraining(requestData, requestMetadata = {}) {
        return this.runTraining$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunTrainingResponse>>
     */
    runTraining$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/RunTraining',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: RunTrainingResponse
        });
    }
}
QAClient.ɵprov = ɵɵdefineInjectable({ factory: function QAClient_Factory() { return new QAClient(ɵɵinject(GRPC_QA_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: QAClient, providedIn: "root" });
QAClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
QAClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_QA_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

var SortingMode;
(function (SortingMode) {
    SortingMode[SortingMode["ascending"] = 0] = "ascending";
    SortingMode[SortingMode["descending"] = 1] = "descending";
})(SortingMode || (SortingMode = {}));
class StatResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param StatResponse value
     */
    constructor(value) {
        value = value || {};
        this.value = value.value;
        StatResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StatResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StatResponse();
        StatResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.value = instance.value || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.value = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        StatResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.value) {
            writer.writeUint32(1, instance.value);
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    toObject() {
        return {
            value: this.value
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_USERS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_USERS_CLIENT_SETTINGS = new InjectionToken('GRPC_USERS_CLIENT_SETTINGS');

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_INTENTS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_INTENTS_CLIENT_SETTINGS = new InjectionToken('GRPC_INTENTS_CLIENT_SETTINGS');

class ExtractEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.text = value.text;
        this.languageCode = value.languageCode;
        ExtractEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtractEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtractEntitiesRequest();
        ExtractEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.text = instance.text || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.text = reader.readString();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtractEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.text) {
            writer.writeString(2, instance.text);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            text: this.text,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ExtractEntitiesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entities = (value.entities || []).map(m => new Intent.TrainingPhrase.Entity(m));
        this.text = value.text;
        ExtractEntitiesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtractEntitiesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtractEntitiesResponse();
        ExtractEntitiesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entities = instance.entities || [];
        instance.text = instance.text || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent.TrainingPhrase.Entity();
                    reader.readMessage(messageInitializer1, Intent.TrainingPhrase.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.text = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtractEntitiesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(1, instance.entities, Intent.TrainingPhrase.Entity.toBinaryWriter);
        }
        if (instance.text) {
            writer.writeString(2, instance.text);
        }
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    toObject() {
        return {
            entities: (this.entities || []).map(m => m.toObject()),
            text: this.text
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAlternativeSentencesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.sentence = value.sentence;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.protectedWords = (value.protectedWords || []).slice();
        this.wordsToChange = (value.wordsToChange || []).slice();
        GetAlternativeSentencesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeSentencesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeSentencesRequest();
        GetAlternativeSentencesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.sentence = instance.sentence || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.protectedWords = instance.protectedWords || [];
        instance.wordsToChange = instance.wordsToChange || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.sentence = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    (instance.protectedWords = instance.protectedWords || []).push(reader.readString());
                    break;
                case 7:
                    (instance.wordsToChange = instance.wordsToChange || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeSentencesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.sentence) {
            writer.writeString(2, instance.sentence);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.protectedWords && instance.protectedWords.length) {
            writer.writeRepeatedString(6, instance.protectedWords);
        }
        if (instance.wordsToChange && instance.wordsToChange.length) {
            writer.writeRepeatedString(7, instance.wordsToChange);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get sentence() {
        return this._sentence;
    }
    set sentence(value) {
        this._sentence = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get protectedWords() {
        return this._protectedWords;
    }
    set protectedWords(value) {
        this._protectedWords = value;
    }
    get wordsToChange() {
        return this._wordsToChange;
    }
    set wordsToChange(value) {
        this._wordsToChange = value;
    }
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            sentence: this.sentence,
            languageCode: this.languageCode,
            parent: this.parent,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GenerateUserSaysRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysRequest value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.nRepeatSynonym = value.nRepeatSynonym;
        this.branch = value.branch;
        GenerateUserSaysRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateUserSaysRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateUserSaysRequest();
        GenerateUserSaysRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.nRepeatSynonym = instance.nRepeatSynonym || 0;
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    instance.nRepeatSynonym = reader.readInt32();
                    break;
                case 8:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateUserSaysRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.nRepeatSynonym) {
            writer.writeInt32(6, instance.nRepeatSynonym);
        }
        if (instance.branch) {
            writer.writeString(8, instance.branch);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get nRepeatSynonym() {
        return this._nRepeatSynonym;
    }
    set nRepeatSynonym(value) {
        this._nRepeatSynonym = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GenerateResponsesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesRequest value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.nRepeatSynonym = value.nRepeatSynonym;
        this.branch = value.branch;
        this.dropUnknownParameters = value.dropUnknownParameters;
        GenerateResponsesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateResponsesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateResponsesRequest();
        GenerateResponsesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.nRepeatSynonym = instance.nRepeatSynonym || 0;
        instance.branch = instance.branch || '';
        instance.dropUnknownParameters = instance.dropUnknownParameters || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 7:
                    instance.nRepeatSynonym = reader.readInt32();
                    break;
                case 8:
                    instance.branch = reader.readString();
                    break;
                case 9:
                    instance.dropUnknownParameters = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateResponsesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.nRepeatSynonym) {
            writer.writeInt32(7, instance.nRepeatSynonym);
        }
        if (instance.branch) {
            writer.writeString(8, instance.branch);
        }
        if (instance.dropUnknownParameters) {
            writer.writeBool(9, instance.dropUnknownParameters);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get nRepeatSynonym() {
        return this._nRepeatSynonym;
    }
    set nRepeatSynonym(value) {
        this._nRepeatSynonym = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    get dropUnknownParameters() {
        return this._dropUnknownParameters;
    }
    set dropUnknownParameters(value) {
        this._dropUnknownParameters = value;
    }
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch,
            dropUnknownParameters: this.dropUnknownParameters
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAlternativeTrainingPhrasesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.trainingPhrase = value.trainingPhrase
            ? new Intent.TrainingPhrase(value.trainingPhrase)
            : undefined;
        this.intentName = value.intentName;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.detectEntities = value.detectEntities;
        this.similarityThreshold = value.similarityThreshold;
        this.protectedWords = (value.protectedWords || []).slice();
        this.wordsToChange = (value.wordsToChange || []).slice();
        this.branch = value.branch;
        GetAlternativeTrainingPhrasesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesRequest();
        GetAlternativeTrainingPhrasesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.trainingPhrase = instance.trainingPhrase || undefined;
        instance.intentName = instance.intentName || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.detectEntities = instance.detectEntities || false;
        instance.similarityThreshold = instance.similarityThreshold || 0;
        instance.protectedWords = instance.protectedWords || [];
        instance.wordsToChange = instance.wordsToChange || [];
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.trainingPhrase = new Intent.TrainingPhrase();
                    reader.readMessage(instance.trainingPhrase, Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 3:
                    instance.intentName = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    instance.detectEntities = reader.readBool();
                    break;
                case 7:
                    instance.similarityThreshold = reader.readFloat();
                    break;
                case 8:
                    (instance.protectedWords = instance.protectedWords || []).push(reader.readString());
                    break;
                case 9:
                    (instance.wordsToChange = instance.wordsToChange || []).push(reader.readString());
                    break;
                case 10:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.trainingPhrase) {
            writer.writeMessage(2, instance.trainingPhrase, Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.intentName) {
            writer.writeString(3, instance.intentName);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.detectEntities) {
            writer.writeBool(6, instance.detectEntities);
        }
        if (instance.similarityThreshold) {
            writer.writeFloat(7, instance.similarityThreshold);
        }
        if (instance.protectedWords && instance.protectedWords.length) {
            writer.writeRepeatedString(8, instance.protectedWords);
        }
        if (instance.wordsToChange && instance.wordsToChange.length) {
            writer.writeRepeatedString(9, instance.wordsToChange);
        }
        if (instance.branch) {
            writer.writeString(10, instance.branch);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get trainingPhrase() {
        return this._trainingPhrase;
    }
    set trainingPhrase(value) {
        this._trainingPhrase = value;
    }
    get intentName() {
        return this._intentName;
    }
    set intentName(value) {
        this._intentName = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get detectEntities() {
        return this._detectEntities;
    }
    set detectEntities(value) {
        this._detectEntities = value;
    }
    get similarityThreshold() {
        return this._similarityThreshold;
    }
    set similarityThreshold(value) {
        this._similarityThreshold = value;
    }
    get protectedWords() {
        return this._protectedWords;
    }
    set protectedWords(value) {
        this._protectedWords = value;
    }
    get wordsToChange() {
        return this._wordsToChange;
    }
    set wordsToChange(value) {
        this._wordsToChange = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toObject()
                : undefined,
            intentName: this.intentName,
            languageCode: this.languageCode,
            parent: this.parent,
            detectEntities: this.detectEntities,
            similarityThreshold: this.similarityThreshold,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice(),
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetSynonymsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.word = value.word;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        GetSynonymsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSynonymsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSynonymsRequest();
        GetSynonymsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.word = instance.word || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.word = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSynonymsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.word) {
            writer.writeString(2, instance.word);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            word: this.word,
            languageCode: this.languageCode,
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetSynonymsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsResponse value
     */
    constructor(value) {
        value = value || {};
        this.synonyms = (value.synonyms || []).map(m => new Synonym(m));
        GetSynonymsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSynonymsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSynonymsResponse();
        GetSynonymsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.synonyms = instance.synonyms || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Synonym();
                    reader.readMessage(messageInitializer1, Synonym.fromBinaryReader);
                    (instance.synonyms = instance.synonyms || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSynonymsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.synonyms && instance.synonyms.length) {
            writer.writeRepeatedMessage(1, instance.synonyms, Synonym.toBinaryWriter);
        }
    }
    get synonyms() {
        return this._synonyms;
    }
    set synonyms(value) {
        this._synonyms = value;
    }
    toObject() {
        return {
            synonyms: (this.synonyms || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Synonym {
    /**
     * Creates an object and applies default Protobuf values
     * @param Synonym value
     */
    constructor(value) {
        value = value || {};
        this.synonym = value.synonym;
        this.score = value.score;
        Synonym.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Synonym.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Synonym();
        Synonym.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.synonym = instance.synonym || '';
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.synonym = reader.readString();
                    break;
                case 2:
                    instance.score = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        Synonym.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.synonym) {
            writer.writeString(1, instance.synonym);
        }
        if (instance.score) {
            writer.writeInt32(2, instance.score);
        }
    }
    get synonym() {
        return this._synonym;
    }
    set synonym(value) {
        this._synonym = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    toObject() {
        return {
            synonym: this.synonym,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAlternativeSentencesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesResponse value
     */
    constructor(value) {
        value = value || {};
        this.alternativeSentences = (value.alternativeSentences || []).map(m => new AltSentence(m));
        GetAlternativeSentencesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeSentencesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeSentencesResponse();
        GetAlternativeSentencesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.alternativeSentences = instance.alternativeSentences || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AltSentence();
                    reader.readMessage(messageInitializer1, AltSentence.fromBinaryReader);
                    (instance.alternativeSentences =
                        instance.alternativeSentences || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeSentencesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.alternativeSentences && instance.alternativeSentences.length) {
            writer.writeRepeatedMessage(1, instance.alternativeSentences, AltSentence.toBinaryWriter);
        }
    }
    get alternativeSentences() {
        return this._alternativeSentences;
    }
    set alternativeSentences(value) {
        this._alternativeSentences = value;
    }
    toObject() {
        return {
            alternativeSentences: (this.alternativeSentences || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GenerateResponsesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesResponse value
     */
    constructor(value) {
        value = value || {};
        this.responses = (value.responses || []).slice();
        GenerateResponsesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateResponsesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateResponsesResponse();
        GenerateResponsesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responses = instance.responses || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    (instance.responses = instance.responses || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateResponsesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responses && instance.responses.length) {
            writer.writeRepeatedString(2, instance.responses);
        }
    }
    get responses() {
        return this._responses;
    }
    set responses(value) {
        this._responses = value;
    }
    toObject() {
        return {
            responses: (this.responses || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GenerateUserSaysResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysResponse value
     */
    constructor(value) {
        value = value || {};
        this.userSays = (value.userSays || []).slice();
        GenerateUserSaysResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateUserSaysResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateUserSaysResponse();
        GenerateUserSaysResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userSays = instance.userSays || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    (instance.userSays = instance.userSays || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateUserSaysResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userSays && instance.userSays.length) {
            writer.writeRepeatedString(2, instance.userSays);
        }
    }
    get userSays() {
        return this._userSays;
    }
    set userSays(value) {
        this._userSays = value;
    }
    toObject() {
        return {
            userSays: (this.userSays || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAlternativeTrainingPhrasesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesResponse value
     */
    constructor(value) {
        value = value || {};
        this.alternativeTrainingPhrases = (value.alternativeTrainingPhrases || []).map(m => new AltTrainingPhrase(m));
        GetAlternativeTrainingPhrasesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesResponse();
        GetAlternativeTrainingPhrasesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.alternativeTrainingPhrases =
            instance.alternativeTrainingPhrases || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AltTrainingPhrase();
                    reader.readMessage(messageInitializer1, AltTrainingPhrase.fromBinaryReader);
                    (instance.alternativeTrainingPhrases =
                        instance.alternativeTrainingPhrases || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.alternativeTrainingPhrases &&
            instance.alternativeTrainingPhrases.length) {
            writer.writeRepeatedMessage(1, instance.alternativeTrainingPhrases, AltTrainingPhrase.toBinaryWriter);
        }
    }
    get alternativeTrainingPhrases() {
        return this._alternativeTrainingPhrases;
    }
    set alternativeTrainingPhrases(value) {
        this._alternativeTrainingPhrases = value;
    }
    toObject() {
        return {
            alternativeTrainingPhrases: (this.alternativeTrainingPhrases || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AltSentence {
    /**
     * Creates an object and applies default Protobuf values
     * @param AltSentence value
     */
    constructor(value) {
        value = value || {};
        this.sentence = value.sentence;
        this.score = value.score;
        AltSentence.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AltSentence.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AltSentence();
        AltSentence.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sentence = instance.sentence || '';
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sentence = reader.readString();
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        AltSentence.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sentence) {
            writer.writeString(1, instance.sentence);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
        }
    }
    get sentence() {
        return this._sentence;
    }
    set sentence(value) {
        this._sentence = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    toObject() {
        return {
            sentence: this.sentence,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AltTrainingPhrase {
    /**
     * Creates an object and applies default Protobuf values
     * @param AltTrainingPhrase value
     */
    constructor(value) {
        value = value || {};
        this.trainingPhrase = value.trainingPhrase
            ? new Intent.TrainingPhrase(value.trainingPhrase)
            : undefined;
        this.score = value.score;
        AltTrainingPhrase.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AltTrainingPhrase.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AltTrainingPhrase();
        AltTrainingPhrase.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.trainingPhrase = instance.trainingPhrase || undefined;
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.trainingPhrase = new Intent.TrainingPhrase();
                    reader.readMessage(instance.trainingPhrase, Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        AltTrainingPhrase.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.trainingPhrase) {
            writer.writeMessage(1, instance.trainingPhrase, Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
        }
    }
    get trainingPhrase() {
        return this._trainingPhrase;
    }
    set trainingPhrase(value) {
        this._trainingPhrase = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    toObject() {
        return {
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toObject()
                : undefined,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DataEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param DataEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.entityEnrichment = value.entityEnrichment
            ? new EntityEnrichmentConfig(value.entityEnrichment)
            : undefined;
        this.thesaurusEnrichment = value.thesaurusEnrichment
            ? new ThesaurusEnrichmentConfig(value.thesaurusEnrichment)
            : undefined;
        this.word2vecEnrichment = value.word2vecEnrichment
            ? new Word2VecEnrichmentConfig(value.word2vecEnrichment)
            : undefined;
        this.wordNetEnrichment = value.wordNetEnrichment
            ? new WordNetAugEnrichmentConfig(value.wordNetEnrichment)
            : undefined;
        this.gpt2Enrichment = value.gpt2Enrichment
            ? new GPT2EnrichmentConfig(value.gpt2Enrichment)
            : undefined;
        this.gloveEnrichment = value.gloveEnrichment
            ? new GloVeEnrichmentConfig(value.gloveEnrichment)
            : undefined;
        this.fasttextEnrichment = value.fasttextEnrichment
            ? new FastTextEnrichmentConfig(value.fasttextEnrichment)
            : undefined;
        this.bertEnrichment = value.bertEnrichment
            ? new BertAugEnrichmentConfig(value.bertEnrichment)
            : undefined;
        this.xlnetEnrichment = value.xlnetEnrichment
            ? new XLNetAugEnrichmentConfig(value.xlnetEnrichment)
            : undefined;
        DataEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DataEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DataEnrichmentConfig();
        DataEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityEnrichment = instance.entityEnrichment || undefined;
        instance.thesaurusEnrichment = instance.thesaurusEnrichment || undefined;
        instance.word2vecEnrichment = instance.word2vecEnrichment || undefined;
        instance.wordNetEnrichment = instance.wordNetEnrichment || undefined;
        instance.gpt2Enrichment = instance.gpt2Enrichment || undefined;
        instance.gloveEnrichment = instance.gloveEnrichment || undefined;
        instance.fasttextEnrichment = instance.fasttextEnrichment || undefined;
        instance.bertEnrichment = instance.bertEnrichment || undefined;
        instance.xlnetEnrichment = instance.xlnetEnrichment || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityEnrichment = new EntityEnrichmentConfig();
                    reader.readMessage(instance.entityEnrichment, EntityEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.thesaurusEnrichment = new ThesaurusEnrichmentConfig();
                    reader.readMessage(instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.fromBinaryReader);
                    break;
                case 3:
                    instance.word2vecEnrichment = new Word2VecEnrichmentConfig();
                    reader.readMessage(instance.word2vecEnrichment, Word2VecEnrichmentConfig.fromBinaryReader);
                    break;
                case 4:
                    instance.wordNetEnrichment = new WordNetAugEnrichmentConfig();
                    reader.readMessage(instance.wordNetEnrichment, WordNetAugEnrichmentConfig.fromBinaryReader);
                    break;
                case 5:
                    instance.gpt2Enrichment = new GPT2EnrichmentConfig();
                    reader.readMessage(instance.gpt2Enrichment, GPT2EnrichmentConfig.fromBinaryReader);
                    break;
                case 6:
                    instance.gloveEnrichment = new GloVeEnrichmentConfig();
                    reader.readMessage(instance.gloveEnrichment, GloVeEnrichmentConfig.fromBinaryReader);
                    break;
                case 7:
                    instance.fasttextEnrichment = new FastTextEnrichmentConfig();
                    reader.readMessage(instance.fasttextEnrichment, FastTextEnrichmentConfig.fromBinaryReader);
                    break;
                case 8:
                    instance.bertEnrichment = new BertAugEnrichmentConfig();
                    reader.readMessage(instance.bertEnrichment, BertAugEnrichmentConfig.fromBinaryReader);
                    break;
                case 9:
                    instance.xlnetEnrichment = new XLNetAugEnrichmentConfig();
                    reader.readMessage(instance.xlnetEnrichment, XLNetAugEnrichmentConfig.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        DataEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityEnrichment) {
            writer.writeMessage(1, instance.entityEnrichment, EntityEnrichmentConfig.toBinaryWriter);
        }
        if (instance.thesaurusEnrichment) {
            writer.writeMessage(2, instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.toBinaryWriter);
        }
        if (instance.word2vecEnrichment) {
            writer.writeMessage(3, instance.word2vecEnrichment, Word2VecEnrichmentConfig.toBinaryWriter);
        }
        if (instance.wordNetEnrichment) {
            writer.writeMessage(4, instance.wordNetEnrichment, WordNetAugEnrichmentConfig.toBinaryWriter);
        }
        if (instance.gpt2Enrichment) {
            writer.writeMessage(5, instance.gpt2Enrichment, GPT2EnrichmentConfig.toBinaryWriter);
        }
        if (instance.gloveEnrichment) {
            writer.writeMessage(6, instance.gloveEnrichment, GloVeEnrichmentConfig.toBinaryWriter);
        }
        if (instance.fasttextEnrichment) {
            writer.writeMessage(7, instance.fasttextEnrichment, FastTextEnrichmentConfig.toBinaryWriter);
        }
        if (instance.bertEnrichment) {
            writer.writeMessage(8, instance.bertEnrichment, BertAugEnrichmentConfig.toBinaryWriter);
        }
        if (instance.xlnetEnrichment) {
            writer.writeMessage(9, instance.xlnetEnrichment, XLNetAugEnrichmentConfig.toBinaryWriter);
        }
    }
    get entityEnrichment() {
        return this._entityEnrichment;
    }
    set entityEnrichment(value) {
        this._entityEnrichment = value;
    }
    get thesaurusEnrichment() {
        return this._thesaurusEnrichment;
    }
    set thesaurusEnrichment(value) {
        this._thesaurusEnrichment = value;
    }
    get word2vecEnrichment() {
        return this._word2vecEnrichment;
    }
    set word2vecEnrichment(value) {
        this._word2vecEnrichment = value;
    }
    get wordNetEnrichment() {
        return this._wordNetEnrichment;
    }
    set wordNetEnrichment(value) {
        this._wordNetEnrichment = value;
    }
    get gpt2Enrichment() {
        return this._gpt2Enrichment;
    }
    set gpt2Enrichment(value) {
        this._gpt2Enrichment = value;
    }
    get gloveEnrichment() {
        return this._gloveEnrichment;
    }
    set gloveEnrichment(value) {
        this._gloveEnrichment = value;
    }
    get fasttextEnrichment() {
        return this._fasttextEnrichment;
    }
    set fasttextEnrichment(value) {
        this._fasttextEnrichment = value;
    }
    get bertEnrichment() {
        return this._bertEnrichment;
    }
    set bertEnrichment(value) {
        this._bertEnrichment = value;
    }
    get xlnetEnrichment() {
        return this._xlnetEnrichment;
    }
    set xlnetEnrichment(value) {
        this._xlnetEnrichment = value;
    }
    toObject() {
        return {
            entityEnrichment: this.entityEnrichment
                ? this.entityEnrichment.toObject()
                : undefined,
            thesaurusEnrichment: this.thesaurusEnrichment
                ? this.thesaurusEnrichment.toObject()
                : undefined,
            word2vecEnrichment: this.word2vecEnrichment
                ? this.word2vecEnrichment.toObject()
                : undefined,
            wordNetEnrichment: this.wordNetEnrichment
                ? this.wordNetEnrichment.toObject()
                : undefined,
            gpt2Enrichment: this.gpt2Enrichment
                ? this.gpt2Enrichment.toObject()
                : undefined,
            gloveEnrichment: this.gloveEnrichment
                ? this.gloveEnrichment.toObject()
                : undefined,
            fasttextEnrichment: this.fasttextEnrichment
                ? this.fasttextEnrichment.toObject()
                : undefined,
            bertEnrichment: this.bertEnrichment
                ? this.bertEnrichment.toObject()
                : undefined,
            xlnetEnrichment: this.xlnetEnrichment
                ? this.xlnetEnrichment.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EntityEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        EntityEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityEnrichmentConfig();
        EntityEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ThesaurusEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param ThesaurusEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        ThesaurusEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ThesaurusEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ThesaurusEnrichmentConfig();
        ThesaurusEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        ThesaurusEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class FastTextEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param FastTextEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        FastTextEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FastTextEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FastTextEnrichmentConfig();
        FastTextEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        FastTextEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BertAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param BertAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        BertAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BertAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BertAugEnrichmentConfig();
        BertAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        BertAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GloVeEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param GloVeEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        GloVeEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GloVeEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GloVeEnrichmentConfig();
        GloVeEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        GloVeEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GPT2EnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param GPT2EnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        GPT2EnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GPT2EnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GPT2EnrichmentConfig();
        GPT2EnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        GPT2EnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Word2VecEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param Word2VecEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        Word2VecEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Word2VecEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Word2VecEnrichmentConfig();
        Word2VecEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        Word2VecEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class WordNetAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param WordNetAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        WordNetAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WordNetAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WordNetAugEnrichmentConfig();
        WordNetAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        WordNetAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class XLNetAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param XLNetAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        XLNetAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        XLNetAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new XLNetAugEnrichmentConfig();
        XLNetAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        XLNetAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_AI_SERVICES_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_AI_SERVICES_CLIENT_SETTINGS = new InjectionToken('GRPC_AI_SERVICES_CLIENT_SETTINGS');

/* tslint:disable */
class AiServicesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.AiServices', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExtractEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ExtractEntitiesResponse>
     */
    extractEntities(requestData, requestMetadata = {}) {
        return this.extractEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExtractEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
     */
    extractEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/ExtractEntities',
            requestData,
            requestMetadata,
            requestClass: ExtractEntitiesRequest,
            responseClass: ExtractEntitiesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GenerateUserSaysRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GenerateUserSaysResponse>
     */
    generateUserSays(requestData, requestMetadata = {}) {
        return this.generateUserSays$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GenerateUserSaysRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>
     */
    generateUserSays$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/GenerateUserSays',
            requestData,
            requestMetadata,
            requestClass: GenerateUserSaysRequest,
            responseClass: GenerateUserSaysResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GenerateResponsesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GenerateResponsesResponse>
     */
    generateResponses(requestData, requestMetadata = {}) {
        return this.generateResponses$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GenerateResponsesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>
     */
    generateResponses$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/GenerateResponses',
            requestData,
            requestMetadata,
            requestClass: GenerateResponsesRequest,
            responseClass: GenerateResponsesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAlternativeSentencesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAlternativeSentencesResponse>
     */
    getAlternativeSentences(requestData, requestMetadata = {}) {
        return this.getAlternativeSentences$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAlternativeSentencesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>
     */
    getAlternativeSentences$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/GetAlternativeSentences',
            requestData,
            requestMetadata,
            requestClass: GetAlternativeSentencesRequest,
            responseClass: GetAlternativeSentencesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAlternativeTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAlternativeTrainingPhrasesResponse>
     */
    getAlternativeTrainingPhrases(requestData, requestMetadata = {}) {
        return this.getAlternativeTrainingPhrases$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAlternativeTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>
     */
    getAlternativeTrainingPhrases$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
            requestData,
            requestMetadata,
            requestClass: GetAlternativeTrainingPhrasesRequest,
            responseClass: GetAlternativeTrainingPhrasesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSynonymsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetSynonymsResponse>
     */
    getSynonyms(requestData, requestMetadata = {}) {
        return this.getSynonyms$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSynonymsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetSynonymsResponse>>
     */
    getSynonyms$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.AiServices/GetSynonyms',
            requestData,
            requestMetadata,
            requestClass: GetSynonymsRequest,
            responseClass: GetSynonymsResponse
        });
    }
}
AiServicesClient.ɵprov = ɵɵdefineInjectable({ factory: function AiServicesClient_Factory() { return new AiServicesClient(ɵɵinject(GRPC_AI_SERVICES_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: AiServicesClient, providedIn: "root" });
AiServicesClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AiServicesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_AI_SERVICES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

class Timestamp {
    /**
     * Creates an object and applies default Protobuf values
     * @param Timestamp value
     */
    constructor(value) {
        value = value || {};
        this.seconds = value.seconds;
        this.nanos = value.nanos;
        Timestamp.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Timestamp.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Timestamp();
        Timestamp.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static fromDate(date) {
        var timestamp = new Timestamp();
        timestamp.fromDate(date);
        return timestamp;
    }
    static fromISOString(isoDate) {
        var timestamp = new Timestamp();
        timestamp.fromISOString(isoDate);
        return timestamp;
    }
    static refineValues(instance) {
        instance.seconds = instance.seconds || '0';
        instance.nanos = instance.nanos || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.seconds = reader.readInt64String();
                    break;
                case 2:
                    instance.nanos = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        Timestamp.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.seconds) {
            writer.writeInt64String(1, instance.seconds);
        }
        if (instance.nanos) {
            writer.writeInt32(2, instance.nanos);
        }
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        this._seconds = value;
    }
    get nanos() {
        return this._nanos;
    }
    set nanos(value) {
        this._nanos = value;
    }
    toObject() {
        return {
            seconds: this.seconds,
            nanos: this.nanos
        };
    }
    toJSON() {
        return this.toObject();
    }
    fromDate(date) {
        this.seconds = '' + Math.floor(date.getTime() / 1e3);
        this.nanos = date.getMilliseconds() * 1e6;
    }
    toDate() {
        return new Date(parseInt(this.seconds || '0') * 1e3 + (this.nanos || 0) / 1e6);
    }
    fromISOString(isoDate) {
        this.fromDate(new Date(isoDate));
    }
    toISOString() {
        return this.toDate().toISOString();
    }
}

class OperationMetadata {
    /**
     * Creates an object and applies default Protobuf values
     * @param OperationMetadata value
     */
    constructor(value) {
        value = value || {};
        this.status = value.status;
        this.parentOperationName = value.parentOperationName;
        this.subOperationNames = (value.subOperationNames || []).slice();
        this.createTime = value.createTime
            ? new Timestamp(value.createTime)
            : undefined;
        this.startTime = value.startTime
            ? new Timestamp(value.startTime)
            : undefined;
        this.endTime = value.endTime
            ? new Timestamp(value.endTime)
            : undefined;
        this.isCancellationRequested = value.isCancellationRequested;
        this.cancelCommand = value.cancelCommand;
        this.userIdCreated = value.userIdCreated;
        this.userIdCancelled = value.userIdCancelled;
        this.projectParent = value.projectParent;
        this.operationType = value.operationType;
        this.hostName = value.hostName;
        this.numReruns = value.numReruns;
        this.maxNumReruns = value.maxNumReruns;
        OperationMetadata.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OperationMetadata.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OperationMetadata();
        OperationMetadata.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.status = instance.status || 0;
        instance.parentOperationName = instance.parentOperationName || '';
        instance.subOperationNames = instance.subOperationNames || [];
        instance.createTime = instance.createTime || undefined;
        instance.startTime = instance.startTime || undefined;
        instance.endTime = instance.endTime || undefined;
        instance.isCancellationRequested =
            instance.isCancellationRequested || false;
        instance.cancelCommand = instance.cancelCommand || '';
        instance.userIdCreated = instance.userIdCreated || '';
        instance.userIdCancelled = instance.userIdCancelled || '';
        instance.projectParent = instance.projectParent || '';
        instance.operationType = instance.operationType || 0;
        instance.hostName = instance.hostName || '';
        instance.numReruns = instance.numReruns || 0;
        instance.maxNumReruns = instance.maxNumReruns || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.status = reader.readEnum();
                    break;
                case 2:
                    instance.parentOperationName = reader.readString();
                    break;
                case 3:
                    (instance.subOperationNames = instance.subOperationNames || []).push(reader.readString());
                    break;
                case 4:
                    instance.createTime = new Timestamp();
                    reader.readMessage(instance.createTime, Timestamp.fromBinaryReader);
                    break;
                case 5:
                    instance.startTime = new Timestamp();
                    reader.readMessage(instance.startTime, Timestamp.fromBinaryReader);
                    break;
                case 6:
                    instance.endTime = new Timestamp();
                    reader.readMessage(instance.endTime, Timestamp.fromBinaryReader);
                    break;
                case 7:
                    instance.isCancellationRequested = reader.readBool();
                    break;
                case 8:
                    instance.cancelCommand = reader.readString();
                    break;
                case 9:
                    instance.userIdCreated = reader.readString();
                    break;
                case 10:
                    instance.userIdCancelled = reader.readString();
                    break;
                case 11:
                    instance.projectParent = reader.readString();
                    break;
                case 12:
                    instance.operationType = reader.readEnum();
                    break;
                case 13:
                    instance.hostName = reader.readString();
                    break;
                case 14:
                    instance.numReruns = reader.readInt32();
                    break;
                case 15:
                    instance.maxNumReruns = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        OperationMetadata.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.status) {
            writer.writeEnum(1, instance.status);
        }
        if (instance.parentOperationName) {
            writer.writeString(2, instance.parentOperationName);
        }
        if (instance.subOperationNames && instance.subOperationNames.length) {
            writer.writeRepeatedString(3, instance.subOperationNames);
        }
        if (instance.createTime) {
            writer.writeMessage(4, instance.createTime, Timestamp.toBinaryWriter);
        }
        if (instance.startTime) {
            writer.writeMessage(5, instance.startTime, Timestamp.toBinaryWriter);
        }
        if (instance.endTime) {
            writer.writeMessage(6, instance.endTime, Timestamp.toBinaryWriter);
        }
        if (instance.isCancellationRequested) {
            writer.writeBool(7, instance.isCancellationRequested);
        }
        if (instance.cancelCommand) {
            writer.writeString(8, instance.cancelCommand);
        }
        if (instance.userIdCreated) {
            writer.writeString(9, instance.userIdCreated);
        }
        if (instance.userIdCancelled) {
            writer.writeString(10, instance.userIdCancelled);
        }
        if (instance.projectParent) {
            writer.writeString(11, instance.projectParent);
        }
        if (instance.operationType) {
            writer.writeEnum(12, instance.operationType);
        }
        if (instance.hostName) {
            writer.writeString(13, instance.hostName);
        }
        if (instance.numReruns) {
            writer.writeInt32(14, instance.numReruns);
        }
        if (instance.maxNumReruns) {
            writer.writeInt32(15, instance.maxNumReruns);
        }
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get parentOperationName() {
        return this._parentOperationName;
    }
    set parentOperationName(value) {
        this._parentOperationName = value;
    }
    get subOperationNames() {
        return this._subOperationNames;
    }
    set subOperationNames(value) {
        this._subOperationNames = value;
    }
    get createTime() {
        return this._createTime;
    }
    set createTime(value) {
        this._createTime = value;
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    get isCancellationRequested() {
        return this._isCancellationRequested;
    }
    set isCancellationRequested(value) {
        this._isCancellationRequested = value;
    }
    get cancelCommand() {
        return this._cancelCommand;
    }
    set cancelCommand(value) {
        this._cancelCommand = value;
    }
    get userIdCreated() {
        return this._userIdCreated;
    }
    set userIdCreated(value) {
        this._userIdCreated = value;
    }
    get userIdCancelled() {
        return this._userIdCancelled;
    }
    set userIdCancelled(value) {
        this._userIdCancelled = value;
    }
    get projectParent() {
        return this._projectParent;
    }
    set projectParent(value) {
        this._projectParent = value;
    }
    get operationType() {
        return this._operationType;
    }
    set operationType(value) {
        this._operationType = value;
    }
    get hostName() {
        return this._hostName;
    }
    set hostName(value) {
        this._hostName = value;
    }
    get numReruns() {
        return this._numReruns;
    }
    set numReruns(value) {
        this._numReruns = value;
    }
    get maxNumReruns() {
        return this._maxNumReruns;
    }
    set maxNumReruns(value) {
        this._maxNumReruns = value;
    }
    toObject() {
        return {
            status: this.status,
            parentOperationName: this.parentOperationName,
            subOperationNames: (this.subOperationNames || []).slice(),
            createTime: this.createTime ? this.createTime.toObject() : undefined,
            startTime: this.startTime ? this.startTime.toObject() : undefined,
            endTime: this.endTime ? this.endTime.toObject() : undefined,
            isCancellationRequested: this.isCancellationRequested,
            cancelCommand: this.cancelCommand,
            userIdCreated: this.userIdCreated,
            userIdCancelled: this.userIdCancelled,
            projectParent: this.projectParent,
            operationType: this.operationType,
            hostName: this.hostName,
            numReruns: this.numReruns,
            maxNumReruns: this.maxNumReruns
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (OperationMetadata) {
    let Status;
    (function (Status) {
        Status[Status["statusUnspecified"] = 0] = "statusUnspecified";
        Status[Status["notStarted"] = 1] = "notStarted";
        Status[Status["inProgress"] = 2] = "inProgress";
        Status[Status["done"] = 3] = "done";
        Status[Status["cancelled"] = 4] = "cancelled";
        Status[Status["failed"] = 5] = "failed";
    })(Status = OperationMetadata.Status || (OperationMetadata.Status = {}));
    let OperationType;
    (function (OperationType) {
        OperationType[OperationType["operationTypeUnspecified"] = 0] = "operationTypeUnspecified";
        OperationType[OperationType["createAgent"] = 1] = "createAgent";
        OperationType[OperationType["importAgent"] = 2] = "importAgent";
        OperationType[OperationType["exportAgent"] = 3] = "exportAgent";
        OperationType[OperationType["deleteAgent"] = 4] = "deleteAgent";
        OperationType[OperationType["restoreAgent"] = 5] = "restoreAgent";
        OperationType[OperationType["buildAgentCache"] = 6] = "buildAgentCache";
        OperationType[OperationType["trainAgent"] = 7] = "trainAgent";
    })(OperationType = OperationMetadata.OperationType || (OperationMetadata.OperationType = {}));
})(OperationMetadata || (OperationMetadata = {}));

class Operation {
    /**
     * Creates an object and applies default Protobuf values
     * @param Operation value
     */
    constructor(value) {
        this._result = Operation.ResultCase.none;
        value = value || {};
        this.name = value.name;
        this.metadata = value.metadata
            ? new Any(value.metadata)
            : undefined;
        this.done = value.done;
        this.error = value.error ? new Status(value.error) : undefined;
        this.response = value.response
            ? new Any(value.response)
            : undefined;
        Operation.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Operation.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Operation();
        Operation.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.metadata = instance.metadata || undefined;
        instance.done = instance.done || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.metadata = new Any();
                    reader.readMessage(instance.metadata, Any.fromBinaryReader);
                    break;
                case 3:
                    instance.done = reader.readBool();
                    break;
                case 4:
                    instance.error = new Status();
                    reader.readMessage(instance.error, Status.fromBinaryReader);
                    break;
                case 5:
                    instance.response = new Any();
                    reader.readMessage(instance.response, Any.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Operation.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.metadata) {
            writer.writeMessage(2, instance.metadata, Any.toBinaryWriter);
        }
        if (instance.done) {
            writer.writeBool(3, instance.done);
        }
        if (instance.error) {
            writer.writeMessage(4, instance.error, Status.toBinaryWriter);
        }
        if (instance.response) {
            writer.writeMessage(5, instance.response, Any.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get metadata() {
        return this._metadata;
    }
    set metadata(value) {
        this._metadata = value;
    }
    get done() {
        return this._done;
    }
    set done(value) {
        this._done = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        if (value !== undefined && value !== null) {
            this._response = undefined;
            this._result = Operation.ResultCase.error;
        }
        this._error = value;
    }
    get response() {
        return this._response;
    }
    set response(value) {
        if (value !== undefined && value !== null) {
            this._error = undefined;
            this._result = Operation.ResultCase.response;
        }
        this._response = value;
    }
    get result() {
        return this._result;
    }
    toObject() {
        return {
            name: this.name,
            metadata: this.metadata ? this.metadata.toObject() : undefined,
            done: this.done,
            error: this.error ? this.error.toObject() : undefined,
            response: this.response ? this.response.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Operation) {
    let ResultCase;
    (function (ResultCase) {
        ResultCase[ResultCase["none"] = 0] = "none";
        ResultCase[ResultCase["error"] = 1] = "error";
        ResultCase[ResultCase["response"] = 2] = "response";
    })(ResultCase = Operation.ResultCase || (Operation.ResultCase = {}));
})(Operation || (Operation = {}));
class GetOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        GetOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetOperationRequest();
        GetOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetOperationRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListOperationsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.filter = value.filter;
        this.pageSize = value.pageSize;
        this.pageToken = value.pageToken;
        ListOperationsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListOperationsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListOperationsRequest();
        ListOperationsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.filter = instance.filter || '';
        instance.pageSize = instance.pageSize || 0;
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.name = reader.readString();
                    break;
                case 1:
                    instance.filter = reader.readString();
                    break;
                case 2:
                    instance.pageSize = reader.readInt32();
                    break;
                case 3:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListOperationsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(4, instance.name);
        }
        if (instance.filter) {
            writer.writeString(1, instance.filter);
        }
        if (instance.pageSize) {
            writer.writeInt32(2, instance.pageSize);
        }
        if (instance.pageToken) {
            writer.writeString(3, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter = value;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(value) {
        this._pageSize = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            name: this.name,
            filter: this.filter,
            pageSize: this.pageSize,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListOperationsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsResponse value
     */
    constructor(value) {
        value = value || {};
        this.operations = (value.operations || []).map(m => new Operation(m));
        this.nextPageToken = value.nextPageToken;
        ListOperationsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListOperationsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListOperationsResponse();
        ListOperationsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.operations = instance.operations || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Operation();
                    reader.readMessage(messageInitializer1, Operation.fromBinaryReader);
                    (instance.operations = instance.operations || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListOperationsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.operations && instance.operations.length) {
            writer.writeRepeatedMessage(1, instance.operations, Operation.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get operations() {
        return this._operations;
    }
    set operations(value) {
        this._operations = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            operations: (this.operations || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CancelOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CancelOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        CancelOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CancelOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CancelOperationRequest();
        CancelOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CancelOperationRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteOperationRequest();
        DeleteOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteOperationRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_ENTITY_TYPES_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_ENTITY_TYPES_CLIENT_SETTINGS = new InjectionToken('GRPC_ENTITY_TYPES_CLIENT_SETTINGS');

/* tslint:disable */
class EntityTypesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.EntityTypes', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData, requestMetadata = {}) {
        return this.listEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
     */
    listEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
            requestData,
            requestMetadata,
            requestClass: ListEntityTypesRequest,
            responseClass: ListEntityTypesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    getEntityType(requestData, requestMetadata = {}) {
        return this.getEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    getEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/GetEntityType',
            requestData,
            requestMetadata,
            requestClass: GetEntityTypeRequest,
            responseClass: EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    createEntityType(requestData, requestMetadata = {}) {
        return this.createEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    createEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/CreateEntityType',
            requestData,
            requestMetadata,
            requestClass: CreateEntityTypeRequest,
            responseClass: EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    updateEntityType(requestData, requestMetadata = {}) {
        return this.updateEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    updateEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
            requestData,
            requestMetadata,
            requestClass: UpdateEntityTypeRequest,
            responseClass: EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteEntityType(requestData, requestMetadata = {}) {
        return this.deleteEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
            requestData,
            requestMetadata,
            requestClass: DeleteEntityTypeRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntityTypes(requestData, requestMetadata = {}) {
        return this.batchUpdateEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
            requestData,
            requestMetadata,
            requestClass: BatchUpdateEntityTypesRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntityTypes(requestData, requestMetadata = {}) {
        return this.batchDeleteEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
            requestData,
            requestMetadata,
            requestClass: BatchDeleteEntityTypesRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchCreateEntities(requestData, requestMetadata = {}) {
        return this.batchCreateEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchCreateEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
            requestData,
            requestMetadata,
            requestClass: BatchCreateEntitiesRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntities(requestData, requestMetadata = {}) {
        return this.batchUpdateEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
            requestData,
            requestMetadata,
            requestClass: BatchUpdateEntitiesRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntities(requestData, requestMetadata = {}) {
        return this.batchDeleteEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
            requestData,
            requestMetadata,
            requestClass: BatchDeleteEntitiesRequest,
            responseClass: Operation
        });
    }
}
EntityTypesClient.ɵprov = ɵɵdefineInjectable({ factory: function EntityTypesClient_Factory() { return new EntityTypesClient(ɵɵinject(GRPC_ENTITY_TYPES_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: EntityTypesClient, providedIn: "root" });
EntityTypesClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EntityTypesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_ENTITY_TYPES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_SERVER_STATISTICS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_SERVER_STATISTICS_CLIENT_SETTINGS = new InjectionToken('GRPC_SERVER_STATISTICS_CLIENT_SETTINGS');

class GetIntentCountRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetIntentCountRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.filterByCategory = value.filterByCategory;
        GetIntentCountRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetIntentCountRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetIntentCountRequest();
        GetIntentCountRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.filterByCategory = instance.filterByCategory || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.filterByCategory = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetIntentCountRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(2, instance.filterByCategory);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    toObject() {
        return {
            parent: this.parent,
            filterByCategory: this.filterByCategory
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetEntityTypeCountRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetEntityTypeCountRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.filterByCategory = value.filterByCategory;
        GetEntityTypeCountRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetEntityTypeCountRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetEntityTypeCountRequest();
        GetEntityTypeCountRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.filterByCategory = instance.filterByCategory || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.filterByCategory = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetEntityTypeCountRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(2, instance.filterByCategory);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    toObject() {
        return {
            parent: this.parent,
            filterByCategory: this.filterByCategory
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetProjectStatRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectStatRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        GetProjectStatRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetProjectStatRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetProjectStatRequest();
        GetProjectStatRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetProjectStatRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetProjectElementStatRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectElementStatRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.languageCode = value.languageCode;
        GetProjectElementStatRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetProjectElementStatRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetProjectElementStatRequest();
        GetProjectElementStatRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetProjectElementStatRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS = new InjectionToken('GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS');

/* tslint:disable */
class ProjectStatisticsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ProjectStatistics', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getIntentCount(requestData, requestMetadata = {}) {
        return this.getIntentCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getIntentCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetIntentCount',
            requestData,
            requestMetadata,
            requestClass: GetIntentCountRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityTypeCount(requestData, requestMetadata = {}) {
        return this.getEntityTypeCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityTypeCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
            requestData,
            requestMetadata,
            requestClass: GetEntityTypeCountRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData, requestMetadata = {}) {
        return this.getUserCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetUserCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectStatRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getSessionCount(requestData, requestMetadata = {}) {
        return this.getSessionCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getSessionCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetSessionCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectStatRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getTrainingPhraseCount(requestData, requestMetadata = {}) {
        return this.getTrainingPhraseCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getTrainingPhraseCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectElementStatRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getResponseCount(requestData, requestMetadata = {}) {
        return this.getResponseCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getResponseCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetResponseCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectElementStatRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityValueCount(requestData, requestMetadata = {}) {
        return this.getEntityValueCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityValueCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectElementStatRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntitySynonymCount(requestData, requestMetadata = {}) {
        return this.getEntitySynonymCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntitySynonymCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
            requestData,
            requestMetadata,
            requestClass: GetProjectElementStatRequest,
            responseClass: StatResponse
        });
    }
}
ProjectStatisticsClient.ɵprov = ɵɵdefineInjectable({ factory: function ProjectStatisticsClient_Factory() { return new ProjectStatisticsClient(ɵɵinject(GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: ProjectStatisticsClient, providedIn: "root" });
ProjectStatisticsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectStatisticsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_AGENTS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_AGENTS_CLIENT_SETTINGS = new InjectionToken('GRPC_AGENTS_CLIENT_SETTINGS');

class GetUserProjectCountRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetUserProjectCountRequest value
     */
    constructor(value) {
        value = value || {};
        this.userId = value.userId;
        GetUserProjectCountRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetUserProjectCountRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetUserProjectCountRequest();
        GetUserProjectCountRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userId = instance.userId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetUserProjectCountRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId) {
            writer.writeString(1, instance.userId);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    toObject() {
        return {
            userId: this.userId
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
class ServerStatisticsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ServerStatistics', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getProjectCount(requestData, requestMetadata = {}) {
        return this.getProjectCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getProjectCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetProjectCount',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserProjectCount(requestData, requestMetadata = {}) {
        return this.getUserProjectCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserProjectCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
            requestData,
            requestMetadata,
            requestClass: GetUserProjectCountRequest,
            responseClass: StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData, requestMetadata = {}) {
        return this.getUserCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetUserCount',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: StatResponse
        });
    }
}
ServerStatisticsClient.ɵprov = ɵɵdefineInjectable({ factory: function ServerStatisticsClient_Factory() { return new ServerStatisticsClient(ɵɵinject(GRPC_SERVER_STATISTICS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: ServerStatisticsClient, providedIn: "root" });
ServerStatisticsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ServerStatisticsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SERVER_STATISTICS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

var DefaultProjectRole;
(function (DefaultProjectRole) {
    DefaultProjectRole[DefaultProjectRole["projectUnspecified"] = 0] = "projectUnspecified";
    DefaultProjectRole[DefaultProjectRole["projectUser"] = 1] = "projectUser";
    DefaultProjectRole[DefaultProjectRole["projectExecutor"] = 2] = "projectExecutor";
    DefaultProjectRole[DefaultProjectRole["projectDeveloper"] = 3] = "projectDeveloper";
    DefaultProjectRole[DefaultProjectRole["projectAdmin"] = 4] = "projectAdmin";
    DefaultProjectRole[DefaultProjectRole["projectInactive"] = 5] = "projectInactive";
})(DefaultProjectRole || (DefaultProjectRole = {}));
var ProjectRoleView;
(function (ProjectRoleView) {
    ProjectRoleView[ProjectRoleView["projectRoleViewUnspecified"] = 0] = "projectRoleViewUnspecified";
    ProjectRoleView[ProjectRoleView["projectRoleViewShallow"] = 1] = "projectRoleViewShallow";
    ProjectRoleView[ProjectRoleView["projectRoleViewFull"] = 2] = "projectRoleViewFull";
})(ProjectRoleView || (ProjectRoleView = {}));
class ProjectRole {
    /**
     * Creates an object and applies default Protobuf values
     * @param ProjectRole value
     */
    constructor(value) {
        value = value || {};
        this.roleId = value.roleId;
        this.name = value.name;
        this.permissions = (value.permissions || []).slice();
        ProjectRole.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ProjectRole.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ProjectRole();
        ProjectRole.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.roleId = instance.roleId || 0;
        instance.name = instance.name || '';
        instance.permissions = instance.permissions || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ProjectRole.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId) {
            writer.writeUint32(1, instance.roleId);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(3, instance.permissions);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    toObject() {
        return {
            roleId: this.roleId,
            name: this.name,
            permissions: (this.permissions || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateProjectRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateProjectRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.role = value.role ? new ProjectRole(value.role) : undefined;
        this.projectRoleView = value.projectRoleView;
        CreateProjectRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateProjectRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateProjectRoleRequest();
        CreateProjectRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.role = instance.role || undefined;
        instance.projectRoleView = instance.projectRoleView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.role = new ProjectRole();
                    reader.readMessage(instance.role, ProjectRole.fromBinaryReader);
                    break;
                case 3:
                    instance.projectRoleView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateProjectRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.role) {
            writer.writeMessage(2, instance.role, ProjectRole.toBinaryWriter);
        }
        if (instance.projectRoleView) {
            writer.writeEnum(3, instance.projectRoleView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get projectRoleView() {
        return this._projectRoleView;
    }
    set projectRoleView(value) {
        this._projectRoleView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            role: this.role ? this.role.toObject() : undefined,
            projectRoleView: this.projectRoleView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateProjectRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateProjectRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.role = value.role ? new ProjectRole(value.role) : undefined;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        this.projectRoleView = value.projectRoleView;
        UpdateProjectRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateProjectRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateProjectRoleRequest();
        UpdateProjectRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.role = instance.role || undefined;
        instance.updateMask = instance.updateMask || undefined;
        instance.projectRoleView = instance.projectRoleView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.role = new ProjectRole();
                    reader.readMessage(instance.role, ProjectRole.fromBinaryReader);
                    break;
                case 3:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                case 4:
                    instance.projectRoleView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateProjectRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.role) {
            writer.writeMessage(2, instance.role, ProjectRole.toBinaryWriter);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, FieldMask.toBinaryWriter);
        }
        if (instance.projectRoleView) {
            writer.writeEnum(4, instance.projectRoleView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get projectRoleView() {
        return this._projectRoleView;
    }
    set projectRoleView(value) {
        this._projectRoleView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            role: this.role ? this.role.toObject() : undefined,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            projectRoleView: this.projectRoleView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetProjectRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectRoleRequest value
     */
    constructor(value) {
        this._projectRoleIdentifier = GetProjectRoleRequest.ProjectRoleIdentifierCase.none;
        value = value || {};
        this.parent = value.parent;
        this.roleId = value.roleId;
        this.roleName = value.roleName;
        this.projectRoleView = value.projectRoleView;
        GetProjectRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetProjectRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetProjectRoleRequest();
        GetProjectRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.projectRoleView = instance.projectRoleView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.roleId = reader.readUint32();
                    break;
                case 3:
                    instance.roleName = reader.readString();
                    break;
                case 4:
                    instance.projectRoleView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetProjectRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.roleId || instance.roleId === 0) {
            writer.writeUint32(2, instance.roleId);
        }
        if (instance.roleName || instance.roleName === '') {
            writer.writeString(3, instance.roleName);
        }
        if (instance.projectRoleView) {
            writer.writeEnum(4, instance.projectRoleView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        if (value !== undefined && value !== null) {
            this._roleName = undefined;
            this._projectRoleIdentifier =
                GetProjectRoleRequest.ProjectRoleIdentifierCase.roleId;
        }
        this._roleId = value;
    }
    get roleName() {
        return this._roleName;
    }
    set roleName(value) {
        if (value !== undefined && value !== null) {
            this._roleId = undefined;
            this._projectRoleIdentifier =
                GetProjectRoleRequest.ProjectRoleIdentifierCase.roleName;
        }
        this._roleName = value;
    }
    get projectRoleView() {
        return this._projectRoleView;
    }
    set projectRoleView(value) {
        this._projectRoleView = value;
    }
    get projectRoleIdentifier() {
        return this._projectRoleIdentifier;
    }
    toObject() {
        return {
            parent: this.parent,
            roleId: this.roleId,
            roleName: this.roleName,
            projectRoleView: this.projectRoleView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GetProjectRoleRequest) {
    let ProjectRoleIdentifierCase;
    (function (ProjectRoleIdentifierCase) {
        ProjectRoleIdentifierCase[ProjectRoleIdentifierCase["none"] = 0] = "none";
        ProjectRoleIdentifierCase[ProjectRoleIdentifierCase["roleId"] = 1] = "roleId";
        ProjectRoleIdentifierCase[ProjectRoleIdentifierCase["roleName"] = 2] = "roleName";
    })(ProjectRoleIdentifierCase = GetProjectRoleRequest.ProjectRoleIdentifierCase || (GetProjectRoleRequest.ProjectRoleIdentifierCase = {}));
})(GetProjectRoleRequest || (GetProjectRoleRequest = {}));
class DeleteProjectRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteProjectRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.roleId = value.roleId;
        DeleteProjectRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteProjectRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteProjectRoleRequest();
        DeleteProjectRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.roleId = instance.roleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.roleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteProjectRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.roleId) {
            writer.writeUint32(2, instance.roleId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            roleId: this.roleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListProjectRolesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectRolesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.pageToken = value.pageToken;
        this.projectRoleView = value.projectRoleView;
        ListProjectRolesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectRolesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectRolesRequest();
        ListProjectRolesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.pageToken = instance.pageToken || '';
        instance.projectRoleView = instance.projectRoleView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.pageToken = reader.readString();
                    break;
                case 3:
                    instance.projectRoleView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectRolesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.pageToken) {
            writer.writeString(2, instance.pageToken);
        }
        if (instance.projectRoleView) {
            writer.writeEnum(3, instance.projectRoleView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get projectRoleView() {
        return this._projectRoleView;
    }
    set projectRoleView(value) {
        this._projectRoleView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken,
            projectRoleView: this.projectRoleView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListProjectRolesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectRolesResponse value
     */
    constructor(value) {
        value = value || {};
        this.projectRoles = (value.projectRoles || []).map(m => new ProjectRole(m));
        this.nextPageToken = value.nextPageToken;
        ListProjectRolesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectRolesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectRolesResponse();
        ListProjectRolesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.projectRoles = instance.projectRoles || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ProjectRole();
                    reader.readMessage(messageInitializer1, ProjectRole.fromBinaryReader);
                    (instance.projectRoles = instance.projectRoles || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectRolesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.projectRoles && instance.projectRoles.length) {
            writer.writeRepeatedMessage(1, instance.projectRoles, ProjectRole.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get projectRoles() {
        return this._projectRoles;
    }
    set projectRoles(value) {
        this._projectRoles = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            projectRoles: (this.projectRoles || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}

var DefaultServerRole;
(function (DefaultServerRole) {
    DefaultServerRole[DefaultServerRole["serverUnspecified"] = 0] = "serverUnspecified";
    DefaultServerRole[DefaultServerRole["serverUser"] = 1] = "serverUser";
    DefaultServerRole[DefaultServerRole["serverManager"] = 2] = "serverManager";
    DefaultServerRole[DefaultServerRole["serverAdmin"] = 3] = "serverAdmin";
    DefaultServerRole[DefaultServerRole["serverInactive"] = 4] = "serverInactive";
})(DefaultServerRole || (DefaultServerRole = {}));
class User {
    /**
     * Creates an object and applies default Protobuf values
     * @param User value
     */
    constructor(value) {
        value = value || {};
        this.userId = value.userId;
        this.displayName = value.displayName;
        this.serverRoleId = value.serverRoleId;
        this.userEmail = value.userEmail;
        User.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        User.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new User();
        User.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userId = instance.userId || '';
        instance.displayName = instance.displayName || '';
        instance.serverRoleId = instance.serverRoleId || 0;
        instance.userEmail = instance.userEmail || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    instance.userId = reader.readString();
                    break;
                case 3:
                    instance.displayName = reader.readString();
                    break;
                case 6:
                    instance.serverRoleId = reader.readUint32();
                    break;
                case 7:
                    instance.userEmail = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        User.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
        if (instance.displayName) {
            writer.writeString(3, instance.displayName);
        }
        if (instance.serverRoleId) {
            writer.writeUint32(6, instance.serverRoleId);
        }
        if (instance.userEmail) {
            writer.writeString(7, instance.userEmail);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get serverRoleId() {
        return this._serverRoleId;
    }
    set serverRoleId(value) {
        this._serverRoleId = value;
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        this._userEmail = value;
    }
    toObject() {
        return {
            userId: this.userId,
            displayName: this.displayName,
            serverRoleId: this.serverRoleId,
            userEmail: this.userEmail
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UserInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInfo value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.projectRoles = Object.assign({}, (value.projectRoles || {}));
        UserInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UserInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UserInfo();
        UserInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.projectRoles = instance.projectRoles || {};
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 2:
                    const msg_2 = {};
                    reader.readMessage(msg_2, UserInfo.ProjectRolesEntry.fromBinaryReader);
                    instance.projectRoles = instance.projectRoles || {};
                    instance.projectRoles[msg_2.key] = msg_2.value;
                    break;
                default:
                    reader.skipField();
            }
        }
        UserInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (!!instance.projectRoles) {
            const keys_2 = Object.keys(instance.projectRoles);
            if (keys_2.length) {
                const repeated_2 = keys_2
                    .map(key => ({
                    key: key,
                    value: instance.projectRoles[key]
                }))
                    .reduce((r, v) => [...r, v], []);
                writer.writeRepeatedMessage(2, repeated_2, UserInfo.ProjectRolesEntry.toBinaryWriter);
            }
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get projectRoles() {
        return this._projectRoles;
    }
    set projectRoles(value) {
        this._projectRoles = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            projectRoles: Object.assign({}, (this.projectRoles || {}))
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (UserInfo) {
    class ProjectRolesEntry {
        /**
         * Creates an object and applies default Protobuf values
         * @param ProjectRolesEntry value
         */
        constructor(value) {
            value = value || {};
            this.key = value.key;
            this.value = value.value
                ? new ProjectRole(value.value)
                : undefined;
            ProjectRolesEntry.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ProjectRolesEntry.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ProjectRolesEntry();
            ProjectRolesEntry.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.key = instance.key || '';
            instance.value = instance.value || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.key = reader.readString();
                        break;
                    case 2:
                        instance.value = new ProjectRole();
                        reader.readMessage(instance.value, ProjectRole.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ProjectRolesEntry.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.key) {
                writer.writeString(1, instance.key);
            }
            if (instance.value) {
                writer.writeMessage(2, instance.value, ProjectRole.toBinaryWriter);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    UserInfo.ProjectRolesEntry = ProjectRolesEntry;
})(UserInfo || (UserInfo = {}));
class CreateUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.password = value.password;
        CreateUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateUserRequest();
        CreateUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.password = instance.password || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 3:
                    instance.password = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.password) {
            writer.writeString(3, instance.password);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            password: this.password
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.password = value.password;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        UpdateUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateUserRequest();
        UpdateUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.password = instance.password || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 4:
                    instance.password = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.password) {
            writer.writeString(4, instance.password);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            password: this.password,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetUserRequest value
     */
    constructor(value) {
        this._userIdentifier = GetUserRequest.UserIdentifierCase.none;
        value = value || {};
        this.userId = value.userId;
        this.userEmail = value.userEmail;
        GetUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetUserRequest();
        GetUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userId = reader.readString();
                    break;
                case 3:
                    instance.userEmail = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId || instance.userId === '') {
            writer.writeString(1, instance.userId);
        }
        if (instance.userEmail || instance.userEmail === '') {
            writer.writeString(3, instance.userEmail);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        if (value !== undefined && value !== null) {
            this._userEmail = undefined;
            this._userIdentifier = GetUserRequest.UserIdentifierCase.userId;
        }
        this._userId = value;
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        if (value !== undefined && value !== null) {
            this._userId = undefined;
            this._userIdentifier = GetUserRequest.UserIdentifierCase.userEmail;
        }
        this._userEmail = value;
    }
    get userIdentifier() {
        return this._userIdentifier;
    }
    toObject() {
        return {
            userId: this.userId,
            userEmail: this.userEmail
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GetUserRequest) {
    let UserIdentifierCase;
    (function (UserIdentifierCase) {
        UserIdentifierCase[UserIdentifierCase["none"] = 0] = "none";
        UserIdentifierCase[UserIdentifierCase["userId"] = 1] = "userId";
        UserIdentifierCase[UserIdentifierCase["userEmail"] = 2] = "userEmail";
    })(UserIdentifierCase = GetUserRequest.UserIdentifierCase || (GetUserRequest.UserIdentifierCase = {}));
})(GetUserRequest || (GetUserRequest = {}));
class DeleteUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.userId = value.userId;
        DeleteUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteUserRequest();
        DeleteUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userId = instance.userId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId) {
            writer.writeString(1, instance.userId);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    toObject() {
        return {
            userId: this.userId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListUsersRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListUsersRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersRequest();
        ListUsersRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListUsersResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new User(m));
        this.nextPageToken = value.nextPageToken;
        ListUsersResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersResponse();
        ListUsersResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new User();
                    reader.readMessage(messageInitializer1, User.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, User.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListUserInfosResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUserInfosResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new UserInfo(m));
        this.nextPageToken = value.nextPageToken;
        ListUserInfosResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUserInfosResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUserInfosResponse();
        ListUserInfosResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new UserInfo();
                    reader.readMessage(messageInitializer1, UserInfo.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUserInfosResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, UserInfo.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ServerRole {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServerRole value
     */
    constructor(value) {
        value = value || {};
        this.roleId = value.roleId;
        this.name = value.name;
        this.permissions = (value.permissions || []).slice();
        ServerRole.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServerRole.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServerRole();
        ServerRole.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.roleId = instance.roleId || 0;
        instance.name = instance.name || '';
        instance.permissions = instance.permissions || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ServerRole.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId) {
            writer.writeUint32(1, instance.roleId);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(3, instance.permissions);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    toObject() {
        return {
            roleId: this.roleId,
            name: this.name,
            permissions: (this.permissions || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.role = value.role ? new ServerRole(value.role) : undefined;
        CreateServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateServerRoleRequest();
        CreateServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.role = instance.role || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.role = new ServerRole();
                    reader.readMessage(instance.role, ServerRole.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.role) {
            writer.writeMessage(1, instance.role, ServerRole.toBinaryWriter);
        }
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    toObject() {
        return {
            role: this.role ? this.role.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.role = value.role ? new ServerRole(value.role) : undefined;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        UpdateServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateServerRoleRequest();
        UpdateServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.role = instance.role || undefined;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.role = new ServerRole();
                    reader.readMessage(instance.role, ServerRole.fromBinaryReader);
                    break;
                case 2:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.role) {
            writer.writeMessage(1, instance.role, ServerRole.toBinaryWriter);
        }
        if (instance.updateMask) {
            writer.writeMessage(2, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            role: this.role ? this.role.toObject() : undefined,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.roleId = value.roleId;
        DeleteServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteServerRoleRequest();
        DeleteServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.roleId = instance.roleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId) {
            writer.writeUint32(1, instance.roleId);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    toObject() {
        return {
            roleId: this.roleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetServerRoleRequest value
     */
    constructor(value) {
        this._serverRoleIdentifier = GetServerRoleRequest.ServerRoleIdentifierCase.none;
        value = value || {};
        this.roleId = value.roleId;
        this.roleName = value.roleName;
        GetServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetServerRoleRequest();
        GetServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                case 2:
                    instance.roleName = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId || instance.roleId === 0) {
            writer.writeUint32(1, instance.roleId);
        }
        if (instance.roleName || instance.roleName === '') {
            writer.writeString(2, instance.roleName);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        if (value !== undefined && value !== null) {
            this._roleName = undefined;
            this._serverRoleIdentifier =
                GetServerRoleRequest.ServerRoleIdentifierCase.roleId;
        }
        this._roleId = value;
    }
    get roleName() {
        return this._roleName;
    }
    set roleName(value) {
        if (value !== undefined && value !== null) {
            this._roleId = undefined;
            this._serverRoleIdentifier =
                GetServerRoleRequest.ServerRoleIdentifierCase.roleName;
        }
        this._roleName = value;
    }
    get serverRoleIdentifier() {
        return this._serverRoleIdentifier;
    }
    toObject() {
        return {
            roleId: this.roleId,
            roleName: this.roleName
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GetServerRoleRequest) {
    let ServerRoleIdentifierCase;
    (function (ServerRoleIdentifierCase) {
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["none"] = 0] = "none";
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["roleId"] = 1] = "roleId";
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["roleName"] = 2] = "roleName";
    })(ServerRoleIdentifierCase = GetServerRoleRequest.ServerRoleIdentifierCase || (GetServerRoleRequest.ServerRoleIdentifierCase = {}));
})(GetServerRoleRequest || (GetServerRoleRequest = {}));
class ListServerRolesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListServerRolesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerRolesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerRolesRequest();
        ListServerRolesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerRolesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListServerRolesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesResponse value
     */
    constructor(value) {
        value = value || {};
        this.serverRoles = (value.serverRoles || []).map(m => new ServerRole(m));
        this.nextPageToken = value.nextPageToken;
        ListServerRolesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerRolesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerRolesResponse();
        ListServerRolesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.serverRoles = instance.serverRoles || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ServerRole();
                    reader.readMessage(messageInitializer1, ServerRole.fromBinaryReader);
                    (instance.serverRoles = instance.serverRoles || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerRolesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.serverRoles && instance.serverRoles.length) {
            writer.writeRepeatedMessage(1, instance.serverRoles, ServerRole.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get serverRoles() {
        return this._serverRoles;
    }
    set serverRoles(value) {
        this._serverRoles = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            serverRoles: (this.serverRoles || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListServerPermissionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListServerPermissionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerPermissionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerPermissionsRequest();
        ListServerPermissionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerPermissionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListServerPermissionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.permissions = (value.permissions || []).slice();
        this.nextPageToken = value.nextPageToken;
        ListServerPermissionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerPermissionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerPermissionsResponse();
        ListServerPermissionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.permissions = instance.permissions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerPermissionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(1, instance.permissions);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            permissions: (this.permissions || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class LoginRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginRequest value
     */
    constructor(value) {
        value = value || {};
        this.userEmail = value.userEmail;
        this.password = value.password;
        LoginRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LoginRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LoginRequest();
        LoginRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userEmail = instance.userEmail || '';
        instance.password = instance.password || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userEmail = reader.readString();
                    break;
                case 2:
                    instance.password = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        LoginRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userEmail) {
            writer.writeString(1, instance.userEmail);
        }
        if (instance.password) {
            writer.writeString(2, instance.password);
        }
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        this._userEmail = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    toObject() {
        return {
            userEmail: this.userEmail,
            password: this.password
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class LoginResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginResponse value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.authToken = value.authToken;
        LoginResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LoginResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LoginResponse();
        LoginResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.authToken = instance.authToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 2:
                    instance.authToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        LoginResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.authToken) {
            writer.writeString(2, instance.authToken);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get authToken() {
        return this._authToken;
    }
    set authToken(value) {
        this._authToken = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            authToken: this.authToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}

var AgentView;
(function (AgentView) {
    AgentView[AgentView["agentViewUnspecified"] = 0] = "agentViewUnspecified";
    AgentView[AgentView["agentViewFull"] = 1] = "agentViewFull";
    AgentView[AgentView["agentViewShallow"] = 2] = "agentViewShallow";
})(AgentView || (AgentView = {}));
var ReportType;
(function (ReportType) {
    ReportType[ReportType["all"] = 0] = "all";
    ReportType[ReportType["intentPerLanguage"] = 1] = "intentPerLanguage";
    ReportType[ReportType["entityPerLanguage"] = 2] = "entityPerLanguage";
    ReportType[ReportType["entityCollision"] = 3] = "entityCollision";
    ReportType[ReportType["intentGeneral"] = 4] = "intentGeneral";
})(ReportType || (ReportType = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat[ReportFormat["csv"] = 0] = "csv";
    ReportFormat[ReportFormat["html"] = 1] = "html";
    ReportFormat[ReportFormat["json"] = 2] = "json";
})(ReportFormat || (ReportFormat = {}));
var AgentStatus;
(function (AgentStatus) {
    AgentStatus[AgentStatus["active"] = 0] = "active";
    AgentStatus[AgentStatus["inactive"] = 1] = "inactive";
})(AgentStatus || (AgentStatus = {}));
class Agent {
    /**
     * Creates an object and applies default Protobuf values
     * @param Agent value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.displayName = value.displayName;
        this.defaultLanguageCode = value.defaultLanguageCode;
        this.supportedLanguageCodes = (value.supportedLanguageCodes || []).slice();
        this.timeZone = value.timeZone;
        this.nluPlatform = value.nluPlatform;
        this.configs = value.configs
            ? new Struct(value.configs)
            : undefined;
        this.ownerId = value.ownerId;
        this.status = value.status;
        this.description = value.description;
        Agent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Agent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Agent();
        Agent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.displayName = instance.displayName || '';
        instance.defaultLanguageCode = instance.defaultLanguageCode || '';
        instance.supportedLanguageCodes = instance.supportedLanguageCodes || [];
        instance.timeZone = instance.timeZone || '';
        instance.nluPlatform = instance.nluPlatform || '';
        instance.configs = instance.configs || undefined;
        instance.ownerId = instance.ownerId || '';
        instance.status = instance.status || 0;
        instance.description = instance.description || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.displayName = reader.readString();
                    break;
                case 3:
                    instance.defaultLanguageCode = reader.readString();
                    break;
                case 4:
                    (instance.supportedLanguageCodes =
                        instance.supportedLanguageCodes || []).push(reader.readString());
                    break;
                case 5:
                    instance.timeZone = reader.readString();
                    break;
                case 6:
                    instance.nluPlatform = reader.readString();
                    break;
                case 7:
                    instance.configs = new Struct();
                    reader.readMessage(instance.configs, Struct.fromBinaryReader);
                    break;
                case 8:
                    instance.ownerId = reader.readString();
                    break;
                case 9:
                    instance.status = reader.readEnum();
                    break;
                case 10:
                    instance.description = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Agent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.defaultLanguageCode) {
            writer.writeString(3, instance.defaultLanguageCode);
        }
        if (instance.supportedLanguageCodes &&
            instance.supportedLanguageCodes.length) {
            writer.writeRepeatedString(4, instance.supportedLanguageCodes);
        }
        if (instance.timeZone) {
            writer.writeString(5, instance.timeZone);
        }
        if (instance.nluPlatform) {
            writer.writeString(6, instance.nluPlatform);
        }
        if (instance.configs) {
            writer.writeMessage(7, instance.configs, Struct.toBinaryWriter);
        }
        if (instance.ownerId) {
            writer.writeString(8, instance.ownerId);
        }
        if (instance.status) {
            writer.writeEnum(9, instance.status);
        }
        if (instance.description) {
            writer.writeString(10, instance.description);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get defaultLanguageCode() {
        return this._defaultLanguageCode;
    }
    set defaultLanguageCode(value) {
        this._defaultLanguageCode = value;
    }
    get supportedLanguageCodes() {
        return this._supportedLanguageCodes;
    }
    set supportedLanguageCodes(value) {
        this._supportedLanguageCodes = value;
    }
    get timeZone() {
        return this._timeZone;
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    get nluPlatform() {
        return this._nluPlatform;
    }
    set nluPlatform(value) {
        this._nluPlatform = value;
    }
    get configs() {
        return this._configs;
    }
    set configs(value) {
        this._configs = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    toObject() {
        return {
            parent: this.parent,
            displayName: this.displayName,
            defaultLanguageCode: this.defaultLanguageCode,
            supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
            timeZone: this.timeZone,
            nluPlatform: this.nluPlatform,
            configs: this.configs ? this.configs.toObject() : undefined,
            ownerId: this.ownerId,
            status: this.status,
            description: this.description
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AgentWithOwner {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentWithOwner value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.owner = value.owner ? new User(value.owner) : undefined;
        AgentWithOwner.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentWithOwner.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentWithOwner();
        AgentWithOwner.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.owner = instance.owner || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.owner = new User();
                    reader.readMessage(instance.owner, User.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentWithOwner.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.owner) {
            writer.writeMessage(2, instance.owner, User.toBinaryWriter);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            owner: this.owner ? this.owner.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AgentOfUserWithOwner {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentOfUserWithOwner value
     */
    constructor(value) {
        value = value || {};
        this.agentWithOwner = value.agentWithOwner
            ? new AgentWithOwner(value.agentWithOwner)
            : undefined;
        this.projectRole = value.projectRole
            ? new ProjectRole(value.projectRole)
            : undefined;
        AgentOfUserWithOwner.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentOfUserWithOwner.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentOfUserWithOwner();
        AgentOfUserWithOwner.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentWithOwner = instance.agentWithOwner || undefined;
        instance.projectRole = instance.projectRole || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentWithOwner = new AgentWithOwner();
                    reader.readMessage(instance.agentWithOwner, AgentWithOwner.fromBinaryReader);
                    break;
                case 2:
                    instance.projectRole = new ProjectRole();
                    reader.readMessage(instance.projectRole, ProjectRole.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentOfUserWithOwner.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentWithOwner) {
            writer.writeMessage(1, instance.agentWithOwner, AgentWithOwner.toBinaryWriter);
        }
        if (instance.projectRole) {
            writer.writeMessage(2, instance.projectRole, ProjectRole.toBinaryWriter);
        }
    }
    get agentWithOwner() {
        return this._agentWithOwner;
    }
    set agentWithOwner(value) {
        this._agentWithOwner = value;
    }
    get projectRole() {
        return this._projectRole;
    }
    set projectRole(value) {
        this._projectRole = value;
    }
    toObject() {
        return {
            agentWithOwner: this.agentWithOwner
                ? this.agentWithOwner.toObject()
                : undefined,
            projectRole: this.projectRole ? this.projectRole.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CreateAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.agentView = value.agentView;
        CreateAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateAgentRequest();
        CreateAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UpdateAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.agentView = value.agentView;
        this.updateMask = value.updateMask
            ? new FieldMask(value.updateMask)
            : undefined;
        UpdateAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateAgentRequest();
        UpdateAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.agentView = instance.agentView || 0;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                case 3:
                    instance.updateMask = new FieldMask();
                    reader.readMessage(instance.updateMask, FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, FieldMask.toBinaryWriter);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        DeleteAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteAgentRequest();
        DeleteAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.agentView = value.agentView;
        GetAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentRequest();
        GetAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListAgentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.agentView = value.agentView;
        this.pageToken = value.pageToken;
        this.sortByField = value.sortByField
            ? new AgentSorting(value.sortByField)
            : undefined;
        ListAgentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsRequest();
        ListAgentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentView = instance.agentView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.sortByField = instance.sortByField || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentView = reader.readEnum();
                    break;
                case 2:
                    instance.pageToken = reader.readString();
                    break;
                case 3:
                    instance.sortByField = new AgentSorting();
                    reader.readMessage(instance.sortByField, AgentSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentView) {
            writer.writeEnum(1, instance.agentView);
        }
        if (instance.pageToken) {
            writer.writeString(2, instance.pageToken);
        }
        if (instance.sortByField) {
            writer.writeMessage(3, instance.sortByField, AgentSorting.toBinaryWriter);
        }
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            agentView: this.agentView,
            pageToken: this.pageToken,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListAgentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.agentsWithOwners = (value.agentsWithOwners || []).map(m => new AgentWithOwner(m));
        this.nextPageToken = value.nextPageToken;
        ListAgentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsResponse();
        ListAgentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentsWithOwners = instance.agentsWithOwners || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AgentWithOwner();
                    reader.readMessage(messageInitializer1, AgentWithOwner.fromBinaryReader);
                    (instance.agentsWithOwners = instance.agentsWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentsWithOwners && instance.agentsWithOwners.length) {
            writer.writeRepeatedMessage(1, instance.agentsWithOwners, AgentWithOwner.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get agentsWithOwners() {
        return this._agentsWithOwners;
    }
    set agentsWithOwners(value) {
        this._agentsWithOwners = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            agentsWithOwners: (this.agentsWithOwners || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListAgentsOfUserResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsOfUserResponse value
     */
    constructor(value) {
        value = value || {};
        this.agentsOfUserWithOwners = (value.agentsOfUserWithOwners || []).map(m => new AgentOfUserWithOwner(m));
        this.nextPageToken = value.nextPageToken;
        ListAgentsOfUserResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsOfUserResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsOfUserResponse();
        ListAgentsOfUserResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentsOfUserWithOwners = instance.agentsOfUserWithOwners || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AgentOfUserWithOwner();
                    reader.readMessage(messageInitializer1, AgentOfUserWithOwner.fromBinaryReader);
                    (instance.agentsOfUserWithOwners =
                        instance.agentsOfUserWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsOfUserResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentsOfUserWithOwners &&
            instance.agentsOfUserWithOwners.length) {
            writer.writeRepeatedMessage(1, instance.agentsOfUserWithOwners, AgentOfUserWithOwner.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get agentsOfUserWithOwners() {
        return this._agentsOfUserWithOwners;
    }
    set agentsOfUserWithOwners(value) {
        this._agentsOfUserWithOwners = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class TrainAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TrainAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.branch = value.branch;
        TrainAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TrainAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TrainAgentRequest();
        TrainAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        TrainAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.branch) {
            writer.writeString(2, instance.branch);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class BuildCacheRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BuildCacheRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.branch = value.branch;
        BuildCacheRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BuildCacheRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BuildCacheRequest();
        BuildCacheRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BuildCacheRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.branch) {
            writer.writeString(2, instance.branch);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ExportAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        ExportAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportAgentRequest();
        ExportAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.agentUri = instance.agentUri || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri) {
            writer.writeString(2, instance.agentUri);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        this._agentUri = value;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ExportAgentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentResponse value
     */
    constructor(value) {
        this._agent = ExportAgentResponse.AgentCase.none;
        value = value || {};
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        ExportAgentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportAgentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportAgentResponse();
        ExportAgentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentUri = reader.readString();
                    break;
                case 2:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportAgentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(1, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(2, instance.agentContent);
        }
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (ExportAgentResponse) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ExportAgentResponse.AgentCase || (ExportAgentResponse.AgentCase = {}));
})(ExportAgentResponse || (ExportAgentResponse = {}));
class OptimizeRankingMatchRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCodes = (value.languageCodes || []).slice();
        this.optimizationConfigs = (value.optimizationConfigs || []).map(m => new RankingMatchOptimizationConfig(m));
        this.inPlace = value.inPlace;
        OptimizeRankingMatchRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OptimizeRankingMatchRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OptimizeRankingMatchRequest();
        OptimizeRankingMatchRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCodes = instance.languageCodes || [];
        instance.optimizationConfigs = instance.optimizationConfigs || [];
        instance.inPlace = instance.inPlace || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 3:
                    const messageInitializer3 = new RankingMatchOptimizationConfig();
                    reader.readMessage(messageInitializer3, RankingMatchOptimizationConfig.fromBinaryReader);
                    (instance.optimizationConfigs =
                        instance.optimizationConfigs || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.inPlace = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        OptimizeRankingMatchRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(2, instance.languageCodes);
        }
        if (instance.optimizationConfigs && instance.optimizationConfigs.length) {
            writer.writeRepeatedMessage(3, instance.optimizationConfigs, RankingMatchOptimizationConfig.toBinaryWriter);
        }
        if (instance.inPlace) {
            writer.writeBool(4, instance.inPlace);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get optimizationConfigs() {
        return this._optimizationConfigs;
    }
    set optimizationConfigs(value) {
        this._optimizationConfigs = value;
    }
    get inPlace() {
        return this._inPlace;
    }
    set inPlace(value) {
        this._inPlace = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCodes: (this.languageCodes || []).slice(),
            optimizationConfigs: (this.optimizationConfigs || []).map(m => m.toObject()),
            inPlace: this.inPlace
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class RankingMatchOptimizationConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param RankingMatchOptimizationConfig value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.nSplits = value.nSplits;
        this.randomSeed = value.randomSeed;
        this.initialThresholds = value.initialThresholds
            ? new Struct(value.initialThresholds)
            : undefined;
        RankingMatchOptimizationConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RankingMatchOptimizationConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RankingMatchOptimizationConfig();
        RankingMatchOptimizationConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.nSplits = instance.nSplits || 0;
        instance.randomSeed = instance.randomSeed || 0;
        instance.initialThresholds = instance.initialThresholds || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.languageCode = reader.readString();
                    break;
                case 2:
                    instance.nSplits = reader.readInt32();
                    break;
                case 3:
                    instance.randomSeed = reader.readInt32();
                    break;
                case 4:
                    instance.initialThresholds = new Struct();
                    reader.readMessage(instance.initialThresholds, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        RankingMatchOptimizationConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(1, instance.languageCode);
        }
        if (instance.nSplits) {
            writer.writeInt32(2, instance.nSplits);
        }
        if (instance.randomSeed) {
            writer.writeInt32(3, instance.randomSeed);
        }
        if (instance.initialThresholds) {
            writer.writeMessage(4, instance.initialThresholds, Struct.toBinaryWriter);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get nSplits() {
        return this._nSplits;
    }
    set nSplits(value) {
        this._nSplits = value;
    }
    get randomSeed() {
        return this._randomSeed;
    }
    set randomSeed(value) {
        this._randomSeed = value;
    }
    get initialThresholds() {
        return this._initialThresholds;
    }
    set initialThresholds(value) {
        this._initialThresholds = value;
    }
    toObject() {
        return {
            languageCode: this.languageCode,
            nSplits: this.nSplits,
            randomSeed: this.randomSeed,
            initialThresholds: this.initialThresholds
                ? this.initialThresholds.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class OptimizeRankingMatchResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchResponse value
     */
    constructor(value) {
        value = value || {};
        this.optimizationInfo = value.optimizationInfo
            ? new Struct(value.optimizationInfo)
            : undefined;
        this.optimizedOndewoConfig = value.optimizedOndewoConfig
            ? new Struct(value.optimizedOndewoConfig)
            : undefined;
        OptimizeRankingMatchResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OptimizeRankingMatchResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OptimizeRankingMatchResponse();
        OptimizeRankingMatchResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.optimizationInfo = instance.optimizationInfo || undefined;
        instance.optimizedOndewoConfig =
            instance.optimizedOndewoConfig || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.optimizationInfo = new Struct();
                    reader.readMessage(instance.optimizationInfo, Struct.fromBinaryReader);
                    break;
                case 3:
                    instance.optimizedOndewoConfig = new Struct();
                    reader.readMessage(instance.optimizedOndewoConfig, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OptimizeRankingMatchResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.optimizationInfo) {
            writer.writeMessage(1, instance.optimizationInfo, Struct.toBinaryWriter);
        }
        if (instance.optimizedOndewoConfig) {
            writer.writeMessage(3, instance.optimizedOndewoConfig, Struct.toBinaryWriter);
        }
    }
    get optimizationInfo() {
        return this._optimizationInfo;
    }
    set optimizationInfo(value) {
        this._optimizationInfo = value;
    }
    get optimizedOndewoConfig() {
        return this._optimizedOndewoConfig;
    }
    set optimizedOndewoConfig(value) {
        this._optimizedOndewoConfig = value;
    }
    toObject() {
        return {
            optimizationInfo: this.optimizationInfo
                ? this.optimizationInfo.toObject()
                : undefined,
            optimizedOndewoConfig: this.optimizedOndewoConfig
                ? this.optimizedOndewoConfig.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ImportAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ImportAgentRequest value
     */
    constructor(value) {
        this._agent = ImportAgentRequest.AgentCase.none;
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        ImportAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ImportAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ImportAgentRequest();
        ImportAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                case 3:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ImportAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(2, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(3, instance.agentContent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (ImportAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ImportAgentRequest.AgentCase || (ImportAgentRequest.AgentCase = {}));
})(ImportAgentRequest || (ImportAgentRequest = {}));
class RestoreAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RestoreAgentRequest value
     */
    constructor(value) {
        this._agent = RestoreAgentRequest.AgentCase.none;
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        RestoreAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RestoreAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RestoreAgentRequest();
        RestoreAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                case 3:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        RestoreAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(2, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(3, instance.agentContent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (RestoreAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = RestoreAgentRequest.AgentCase || (RestoreAgentRequest.AgentCase = {}));
})(RestoreAgentRequest || (RestoreAgentRequest = {}));
class GetAgentStatisticsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.format = value.format;
        this.languageCode = value.languageCode;
        this.type = value.type;
        GetAgentStatisticsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentStatisticsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentStatisticsRequest();
        GetAgentStatisticsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.format = instance.format || 0;
        instance.languageCode = instance.languageCode || '';
        instance.type = instance.type || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.format = reader.readEnum();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.type = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentStatisticsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.format) {
            writer.writeEnum(2, instance.format);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.type) {
            writer.writeEnum(4, instance.type);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    toObject() {
        return {
            parent: this.parent,
            format: this.format,
            languageCode: this.languageCode,
            type: this.type
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetAgentStatisticsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsResponse value
     */
    constructor(value) {
        value = value || {};
        this.reports = value.reports;
        this.format = value.format;
        this.type = value.type;
        GetAgentStatisticsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentStatisticsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentStatisticsResponse();
        GetAgentStatisticsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.reports = instance.reports || new Uint8Array();
        instance.format = instance.format || 0;
        instance.type = instance.type || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.reports = reader.readBytes();
                    break;
                case 2:
                    instance.format = reader.readEnum();
                    break;
                case 3:
                    instance.type = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentStatisticsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.reports && instance.reports.length) {
            writer.writeBytes(1, instance.reports);
        }
        if (instance.format) {
            writer.writeEnum(2, instance.format);
        }
        if (instance.type) {
            writer.writeEnum(3, instance.type);
        }
    }
    get reports() {
        return this._reports;
    }
    set reports(value) {
        this._reports = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    toObject() {
        return {
            reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
            format: this.format,
            type: this.type
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AddUserToProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddUserToProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.userId = value.userId;
        this.projectRoleId = value.projectRoleId;
        AddUserToProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddUserToProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddUserToProjectRequest();
        AddUserToProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.userId = instance.userId || '';
        instance.projectRoleId = instance.projectRoleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.userId = reader.readString();
                    break;
                case 4:
                    instance.projectRoleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddUserToProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
        if (instance.projectRoleId) {
            writer.writeUint32(4, instance.projectRoleId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get projectRoleId() {
        return this._projectRoleId;
    }
    set projectRoleId(value) {
        this._projectRoleId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            userId: this.userId,
            projectRoleId: this.projectRoleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class RemoveUserFromProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveUserFromProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.userId = value.userId;
        RemoveUserFromProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RemoveUserFromProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RemoveUserFromProjectRequest();
        RemoveUserFromProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.userId = instance.userId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.userId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        RemoveUserFromProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            userId: this.userId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListUsersInProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.pageToken = value.pageToken;
        ListUsersInProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersInProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersInProjectRequest();
        ListUsersInProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersInProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.pageToken) {
            writer.writeString(2, instance.pageToken);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class UserInProject {
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInProject value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.user = value.user ? new User(value.user) : undefined;
        this.roleId = value.roleId;
        UserInProject.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UserInProject.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UserInProject();
        UserInProject.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.user = instance.user || undefined;
        instance.roleId = instance.roleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 3:
                    instance.roleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        UserInProject.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.user) {
            writer.writeMessage(2, instance.user, User.toBinaryWriter);
        }
        if (instance.roleId) {
            writer.writeUint32(3, instance.roleId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            user: this.user ? this.user.toObject() : undefined,
            roleId: this.roleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListUsersInProjectResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new UserInProject(m));
        this.nextPageToken = value.nextPageToken;
        ListUsersInProjectResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersInProjectResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersInProjectResponse();
        ListUsersInProjectResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new UserInProject();
                    reader.readMessage(messageInitializer1, UserInProject.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersInProjectResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, UserInProject.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GetPlatformInfoResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetPlatformInfoResponse value
     */
    constructor(value) {
        value = value || {};
        this.version = value.version;
        this.commitHash = value.commitHash;
        GetPlatformInfoResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetPlatformInfoResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetPlatformInfoResponse();
        GetPlatformInfoResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.version = instance.version || '';
        instance.commitHash = instance.commitHash || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.version = reader.readString();
                    break;
                case 2:
                    instance.commitHash = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetPlatformInfoResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.version) {
            writer.writeString(1, instance.version);
        }
        if (instance.commitHash) {
            writer.writeString(2, instance.commitHash);
        }
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get commitHash() {
        return this._commitHash;
    }
    set commitHash(value) {
        this._commitHash = value;
    }
    toObject() {
        return {
            version: this.version,
            commitHash: this.commitHash
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListProjectPermissionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListProjectPermissionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectPermissionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectPermissionsRequest();
        ListProjectPermissionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectPermissionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListProjectPermissionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.permissions = (value.permissions || []).slice();
        this.nextPageToken = value.nextPageToken;
        ListProjectPermissionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectPermissionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectPermissionsResponse();
        ListProjectPermissionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.permissions = instance.permissions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectPermissionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(1, instance.permissions);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            permissions: (this.permissions || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class SetAgentStatusRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param SetAgentStatusRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.status = value.status;
        this.agentView = value.agentView;
        SetAgentStatusRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SetAgentStatusRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SetAgentStatusRequest();
        SetAgentStatusRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.status = instance.status || 0;
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.status = reader.readEnum();
                    break;
                case 3:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        SetAgentStatusRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.status) {
            writer.writeEnum(2, instance.status);
        }
        if (instance.agentView) {
            writer.writeEnum(3, instance.agentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            status: this.status,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class AgentSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        AgentSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentSorting();
        AgentSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (AgentSorting) {
    let AgentSortingField;
    (function (AgentSortingField) {
        AgentSortingField[AgentSortingField["noAgentSorting"] = 0] = "noAgentSorting";
        AgentSortingField[AgentSortingField["sortAgentByName"] = 1] = "sortAgentByName";
        AgentSortingField[AgentSortingField["sortAgentByCreationDate"] = 2] = "sortAgentByCreationDate";
        AgentSortingField[AgentSortingField["sortAgentByLastUpdated"] = 3] = "sortAgentByLastUpdated";
        AgentSortingField[AgentSortingField["sortAgentByOwnerName"] = 4] = "sortAgentByOwnerName";
    })(AgentSortingField = AgentSorting.AgentSortingField || (AgentSorting.AgentSortingField = {}));
})(AgentSorting || (AgentSorting = {}));
class SetResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param SetResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.resourceFile = value.resourceFile;
        this.languageCode = value.languageCode;
        SetResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SetResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SetResourcesRequest();
        SetResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.resourceFile = instance.resourceFile || new Uint8Array();
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.resourceFile = reader.readBytes();
                    break;
                case 5:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        SetResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.resourceFile && instance.resourceFile.length) {
            writer.writeBytes(4, instance.resourceFile);
        }
        if (instance.languageCode) {
            writer.writeString(5, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array(),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DeleteResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        DeleteResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteResourcesRequest();
        DeleteResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ExportResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        ExportResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportResourcesRequest();
        ExportResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ExportResourcesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesResponse value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        this.resourceFile = value.resourceFile;
        ExportResourcesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportResourcesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportResourcesResponse();
        ExportResourcesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
        instance.resourceFile = instance.resourceFile || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.resourceFile = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportResourcesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.resourceFile && instance.resourceFile.length) {
            writer.writeBytes(5, instance.resourceFile);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
class IntentsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Intents', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListIntentsResponse>
     */
    listIntents(requestData, requestMetadata = {}) {
        return this.listIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListIntentsResponse>>
     */
    listIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/ListIntents',
            requestData,
            requestMetadata,
            requestClass: ListIntentsRequest,
            responseClass: ListIntentsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    getIntent(requestData, requestMetadata = {}) {
        return this.getIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    getIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/GetIntent',
            requestData,
            requestMetadata,
            requestClass: GetIntentRequest,
            responseClass: Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    createIntent(requestData, requestMetadata = {}) {
        return this.createIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    createIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/CreateIntent',
            requestData,
            requestMetadata,
            requestClass: CreateIntentRequest,
            responseClass: Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    updateIntent(requestData, requestMetadata = {}) {
        return this.updateIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    updateIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/UpdateIntent',
            requestData,
            requestMetadata,
            requestClass: UpdateIntentRequest,
            responseClass: Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf004.Empty>
     */
    deleteIntent(requestData, requestMetadata = {}) {
        return this.deleteIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf004.Empty>>
     */
    deleteIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/DeleteIntent',
            requestData,
            requestMetadata,
            requestClass: DeleteIntentRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchUpdateIntents(requestData, requestMetadata = {}) {
        return this.batchUpdateIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchUpdateIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/BatchUpdateIntents',
            requestData,
            requestMetadata,
            requestClass: BatchUpdateIntentsRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchDeleteIntents(requestData, requestMetadata = {}) {
        return this.batchDeleteIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchDeleteIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/BatchDeleteIntents',
            requestData,
            requestMetadata,
            requestClass: BatchDeleteIntentsRequest,
            responseClass: Operation
        });
    }
}
IntentsClient.ɵprov = ɵɵdefineInjectable({ factory: function IntentsClient_Factory() { return new IntentsClient(ɵɵinject(GRPC_INTENTS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: IntentsClient, providedIn: "root" });
IntentsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
IntentsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_INTENTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_SESSIONS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_SESSIONS_CLIENT_SETTINGS = new InjectionToken('GRPC_SESSIONS_CLIENT_SETTINGS');

/* tslint:disable */
class SessionsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Sessions', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.DetectIntentResponse>
     */
    detectIntent(requestData, requestMetadata = {}) {
        return this.detectIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.DetectIntentResponse>>
     */
    detectIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/DetectIntent',
            requestData,
            requestMetadata,
            requestClass: DetectIntentRequest,
            responseClass: DetectIntentResponse
        });
    }
    /**
     * Server streaming RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.StreamingDetectIntentResponse>
     */
    streamingDetectIntent(requestData, requestMetadata = {}) {
        return this.streamingDetectIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Server streaming RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
     */
    streamingDetectIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.serverStream,
            client: this.client,
            path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
            requestData,
            requestMetadata,
            requestClass: StreamingDetectIntentRequest,
            responseClass: StreamingDetectIntentResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionsResponse>
     */
    listSessions(requestData, requestMetadata = {}) {
        return this.listSessions$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionsResponse>>
     */
    listSessions$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessions',
            requestData,
            requestMetadata,
            requestClass: ListSessionsRequest,
            responseClass: ListSessionsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    getSession(requestData, requestMetadata = {}) {
        return this.getSession$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    getSession$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetSession',
            requestData,
            requestMetadata,
            requestClass: GetSessionRequest,
            responseClass: Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    trackSessionStep(requestData, requestMetadata = {}) {
        return this.trackSessionStep$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    trackSessionStep$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/TrackSessionStep',
            requestData,
            requestMetadata,
            requestClass: TrackSessionStepRequest,
            responseClass: Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteSession(requestData, requestMetadata = {}) {
        return this.deleteSession$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteSession$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/DeleteSession',
            requestData,
            requestMetadata,
            requestClass: DeleteSessionRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabels(requestData, requestMetadata = {}) {
        return this.listSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
     */
    listSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessionLabels',
            requestData,
            requestMetadata,
            requestClass: ListSessionLabelsRequest,
            responseClass: ListSessionLabelsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    addSessionLabels(requestData, requestMetadata = {}) {
        return this.addSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    addSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/AddSessionLabels',
            requestData,
            requestMetadata,
            requestClass: AddSessionLabelsRequest,
            responseClass: Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    removeSessionLabels(requestData, requestMetadata = {}) {
        return this.removeSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    removeSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/RemoveSessionLabels',
            requestData,
            requestMetadata,
            requestClass: RemoveSessionLabelsRequest,
            responseClass: Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionReviewsResponse>
     */
    listSessionReviews(requestData, requestMetadata = {}) {
        return this.listSessionReviews$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
     */
    listSessionReviews$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessionReviews',
            requestData,
            requestMetadata,
            requestClass: ListSessionReviewsRequest,
            responseClass: ListSessionReviewsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getSessionReview(requestData, requestMetadata = {}) {
        return this.getSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetSessionReview',
            requestData,
            requestMetadata,
            requestClass: GetSessionReviewRequest,
            responseClass: SessionReview
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getLatestSessionReview(requestData, requestMetadata = {}) {
        return this.getLatestSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getLatestSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
            requestData,
            requestMetadata,
            requestClass: GetLatestSessionReviewRequest,
            responseClass: SessionReview
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    createSessionReview(requestData, requestMetadata = {}) {
        return this.createSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    createSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/CreateSessionReview',
            requestData,
            requestMetadata,
            requestClass: CreateSessionReviewRequest,
            responseClass: SessionReview
        });
    }
}
SessionsClient.ɵprov = ɵɵdefineInjectable({ factory: function SessionsClient_Factory() { return new SessionsClient(ɵɵinject(GRPC_SESSIONS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: SessionsClient, providedIn: "root" });
SessionsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SessionsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SESSIONS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_CONTEXTS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_CONTEXTS_CLIENT_SETTINGS = new InjectionToken('GRPC_CONTEXTS_CLIENT_SETTINGS');

/* tslint:disable */
class ContextsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Contexts', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListContextsResponse>
     */
    listContexts(requestData, requestMetadata = {}) {
        return this.listContexts$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListContextsResponse>>
     */
    listContexts$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/ListContexts',
            requestData,
            requestMetadata,
            requestClass: ListContextsRequest,
            responseClass: ListContextsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    getContext(requestData, requestMetadata = {}) {
        return this.getContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    getContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/GetContext',
            requestData,
            requestMetadata,
            requestClass: GetContextRequest,
            responseClass: Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    createContext(requestData, requestMetadata = {}) {
        return this.createContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    createContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/CreateContext',
            requestData,
            requestMetadata,
            requestClass: CreateContextRequest,
            responseClass: Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    updateContext(requestData, requestMetadata = {}) {
        return this.updateContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    updateContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/UpdateContext',
            requestData,
            requestMetadata,
            requestClass: UpdateContextRequest,
            responseClass: Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteContext(requestData, requestMetadata = {}) {
        return this.deleteContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/DeleteContext',
            requestData,
            requestMetadata,
            requestClass: DeleteContextRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteAllContexts(requestData, requestMetadata = {}) {
        return this.deleteAllContexts$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteAllContexts$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/DeleteAllContexts',
            requestData,
            requestMetadata,
            requestClass: DeleteAllContextsRequest,
            responseClass: Empty
        });
    }
}
ContextsClient.ɵprov = ɵɵdefineInjectable({ factory: function ContextsClient_Factory() { return new ContextsClient(ɵɵinject(GRPC_CONTEXTS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: ContextsClient, providedIn: "root" });
ContextsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ContextsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_CONTEXTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_PROJECT_ROLES_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_PROJECT_ROLES_CLIENT_SETTINGS = new InjectionToken('GRPC_PROJECT_ROLES_CLIENT_SETTINGS');

/* tslint:disable */
class ProjectRolesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ProjectRoles', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    createProjectRole(requestData, requestMetadata = {}) {
        return this.createProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    createProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/CreateProjectRole',
            requestData,
            requestMetadata,
            requestClass: CreateProjectRoleRequest,
            responseClass: ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    getProjectRole(requestData, requestMetadata = {}) {
        return this.getProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    getProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/GetProjectRole',
            requestData,
            requestMetadata,
            requestClass: GetProjectRoleRequest,
            responseClass: ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteProjectRole(requestData, requestMetadata = {}) {
        return this.deleteProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
            requestData,
            requestMetadata,
            requestClass: DeleteProjectRoleRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    updateProjectRole(requestData, requestMetadata = {}) {
        return this.updateProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    updateProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
            requestData,
            requestMetadata,
            requestClass: UpdateProjectRoleRequest,
            responseClass: ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListProjectRolesResponse>
     */
    listProjectRoles(requestData, requestMetadata = {}) {
        return this.listProjectRoles$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
     */
    listProjectRoles$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/ListProjectRoles',
            requestData,
            requestMetadata,
            requestClass: ListProjectRolesRequest,
            responseClass: ListProjectRolesResponse
        });
    }
}
ProjectRolesClient.ɵprov = ɵɵdefineInjectable({ factory: function ProjectRolesClient_Factory() { return new ProjectRolesClient(ɵɵinject(GRPC_PROJECT_ROLES_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: ProjectRolesClient, providedIn: "root" });
ProjectRolesClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectRolesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_PROJECT_ROLES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
class UsersClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Users', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    createUser(requestData, requestMetadata = {}) {
        return this.createUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    createUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CreateUser',
            requestData,
            requestMetadata,
            requestClass: CreateUserRequest,
            responseClass: User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    getUser(requestData, requestMetadata = {}) {
        return this.getUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    getUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetUser',
            requestData,
            requestMetadata,
            requestClass: GetUserRequest,
            responseClass: User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.UserInfo>
     */
    getUserInfo(requestData, requestMetadata = {}) {
        return this.getUserInfo$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.UserInfo>>
     */
    getUserInfo$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetUserInfo',
            requestData,
            requestMetadata,
            requestClass: GetUserRequest,
            responseClass: UserInfo
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteUser(requestData, requestMetadata = {}) {
        return this.deleteUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/DeleteUser',
            requestData,
            requestMetadata,
            requestClass: GetUserRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    updateUser(requestData, requestMetadata = {}) {
        return this.updateUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    updateUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/UpdateUser',
            requestData,
            requestMetadata,
            requestClass: UpdateUserRequest,
            responseClass: User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUsersResponse>
     */
    listUsers(requestData, requestMetadata = {}) {
        return this.listUsers$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUsersResponse>>
     */
    listUsers$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListUsers',
            requestData,
            requestMetadata,
            requestClass: ListUsersRequest,
            responseClass: ListUsersResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUserInfosResponse>
     */
    listUserInfos(requestData, requestMetadata = {}) {
        return this.listUserInfos$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUserInfosResponse>>
     */
    listUserInfos$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListUserInfos',
            requestData,
            requestMetadata,
            requestClass: ListUsersRequest,
            responseClass: ListUserInfosResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    createServerRole(requestData, requestMetadata = {}) {
        return this.createServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    createServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CreateServerRole',
            requestData,
            requestMetadata,
            requestClass: CreateServerRoleRequest,
            responseClass: ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    getServerRole(requestData, requestMetadata = {}) {
        return this.getServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    getServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetServerRole',
            requestData,
            requestMetadata,
            requestClass: GetServerRoleRequest,
            responseClass: ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteServerRole(requestData, requestMetadata = {}) {
        return this.deleteServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/DeleteServerRole',
            requestData,
            requestMetadata,
            requestClass: DeleteServerRoleRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    updateServerRole(requestData, requestMetadata = {}) {
        return this.updateServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    updateServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/UpdateServerRole',
            requestData,
            requestMetadata,
            requestClass: UpdateServerRoleRequest,
            responseClass: ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerRolesResponse>
     */
    listServerRoles(requestData, requestMetadata = {}) {
        return this.listServerRoles$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerRolesResponse>>
     */
    listServerRoles$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListServerRoles',
            requestData,
            requestMetadata,
            requestClass: ListServerRolesRequest,
            responseClass: ListServerRolesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerPermissionsResponse>
     */
    listServerPermissions(requestData, requestMetadata = {}) {
        return this.listServerPermissions$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>
     */
    listServerPermissions$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListServerPermissions',
            requestData,
            requestMetadata,
            requestClass: ListServerPermissionsRequest,
            responseClass: ListServerPermissionsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.LoginResponse>
     */
    login(requestData, requestMetadata = {}) {
        return this.login$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/Login',
            requestData,
            requestMetadata,
            requestClass: LoginRequest,
            responseClass: LoginResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    checkLogin(requestData, requestMetadata = {}) {
        return this.checkLogin$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    checkLogin$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CheckLogin',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: Empty
        });
    }
}
UsersClient.ɵprov = ɵɵdefineInjectable({ factory: function UsersClient_Factory() { return new UsersClient(ɵɵinject(GRPC_USERS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: UsersClient, providedIn: "root" });
UsersClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UsersClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_USERS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

class PingRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param PingRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        PingRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PingRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PingRequest();
        PingRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        PingRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    toObject() {
        return {
            session: this.session
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class WebhookRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.responseId = value.responseId;
        this.queryResult = value.queryResult
            ? new QueryResult(value.queryResult)
            : undefined;
        this.originalDetectIntentRequest = value.originalDetectIntentRequest
            ? new OriginalDetectIntentRequest(value.originalDetectIntentRequest)
            : undefined;
        this.headers = value.headers
            ? new Struct(value.headers)
            : undefined;
        WebhookRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WebhookRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WebhookRequest();
        WebhookRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.responseId = instance.responseId || '';
        instance.queryResult = instance.queryResult || undefined;
        instance.originalDetectIntentRequest =
            instance.originalDetectIntentRequest || undefined;
        instance.headers = instance.headers || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.session = reader.readString();
                    break;
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.queryResult = new QueryResult();
                    reader.readMessage(instance.queryResult, QueryResult.fromBinaryReader);
                    break;
                case 3:
                    instance.originalDetectIntentRequest = new OriginalDetectIntentRequest();
                    reader.readMessage(instance.originalDetectIntentRequest, OriginalDetectIntentRequest.fromBinaryReader);
                    break;
                case 5:
                    instance.headers = new Struct();
                    reader.readMessage(instance.headers, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        WebhookRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(4, instance.session);
        }
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.queryResult) {
            writer.writeMessage(2, instance.queryResult, QueryResult.toBinaryWriter);
        }
        if (instance.originalDetectIntentRequest) {
            writer.writeMessage(3, instance.originalDetectIntentRequest, OriginalDetectIntentRequest.toBinaryWriter);
        }
        if (instance.headers) {
            writer.writeMessage(5, instance.headers, Struct.toBinaryWriter);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get originalDetectIntentRequest() {
        return this._originalDetectIntentRequest;
    }
    set originalDetectIntentRequest(value) {
        this._originalDetectIntentRequest = value;
    }
    get headers() {
        return this._headers;
    }
    set headers(value) {
        this._headers = value;
    }
    toObject() {
        return {
            session: this.session,
            responseId: this.responseId,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            originalDetectIntentRequest: this.originalDetectIntentRequest
                ? this.originalDetectIntentRequest.toObject()
                : undefined,
            headers: this.headers ? this.headers.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class WebhookResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookResponse value
     */
    constructor(value) {
        value = value || {};
        this.fulfillmentText = value.fulfillmentText;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new Intent.Message(m));
        this.source = value.source;
        this.payload = value.payload
            ? new Struct(value.payload)
            : undefined;
        this.outputContexts = (value.outputContexts || []).map(m => new Context(m));
        this.followupEventInput = value.followupEventInput
            ? new EventInput(value.followupEventInput)
            : undefined;
        WebhookResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WebhookResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WebhookResponse();
        WebhookResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.fulfillmentText = instance.fulfillmentText || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.source = instance.source || '';
        instance.payload = instance.payload || undefined;
        instance.outputContexts = instance.outputContexts || [];
        instance.followupEventInput = instance.followupEventInput || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.fulfillmentText = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Intent.Message();
                    reader.readMessage(messageInitializer2, Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.source = reader.readString();
                    break;
                case 4:
                    instance.payload = new Struct();
                    reader.readMessage(instance.payload, Struct.fromBinaryReader);
                    break;
                case 5:
                    const messageInitializer5 = new Context();
                    reader.readMessage(messageInitializer5, Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer5);
                    break;
                case 6:
                    instance.followupEventInput = new EventInput();
                    reader.readMessage(instance.followupEventInput, EventInput.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        WebhookResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.fulfillmentText) {
            writer.writeString(1, instance.fulfillmentText);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(2, instance.fulfillmentMessages, Intent.Message.toBinaryWriter);
        }
        if (instance.source) {
            writer.writeString(3, instance.source);
        }
        if (instance.payload) {
            writer.writeMessage(4, instance.payload, Struct.toBinaryWriter);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(5, instance.outputContexts, Context.toBinaryWriter);
        }
        if (instance.followupEventInput) {
            writer.writeMessage(6, instance.followupEventInput, EventInput.toBinaryWriter);
        }
    }
    get fulfillmentText() {
        return this._fulfillmentText;
    }
    set fulfillmentText(value) {
        this._fulfillmentText = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get followupEventInput() {
        return this._followupEventInput;
    }
    set followupEventInput(value) {
        this._followupEventInput = value;
    }
    toObject() {
        return {
            fulfillmentText: this.fulfillmentText,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            source: this.source,
            payload: this.payload ? this.payload.toObject() : undefined,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            followupEventInput: this.followupEventInput
                ? this.followupEventInput.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class OriginalDetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param OriginalDetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.source = value.source;
        this.payload = value.payload
            ? new Struct(value.payload)
            : undefined;
        OriginalDetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OriginalDetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OriginalDetectIntentRequest();
        OriginalDetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.source = instance.source || '';
        instance.payload = instance.payload || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.source = reader.readString();
                    break;
                case 3:
                    instance.payload = new Struct();
                    reader.readMessage(instance.payload, Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OriginalDetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.source) {
            writer.writeString(1, instance.source);
        }
        if (instance.payload) {
            writer.writeMessage(3, instance.payload, Struct.toBinaryWriter);
        }
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    toObject() {
        return {
            source: this.source,
            payload: this.payload ? this.payload.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class PingResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param PingResponse value
     */
    constructor(value) {
        value = value || {};
        this.isReachable = value.isReachable;
        PingResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PingResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PingResponse();
        PingResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isReachable = instance.isReachable || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isReachable = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        PingResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isReachable) {
            writer.writeBool(1, instance.isReachable);
        }
    }
    get isReachable() {
        return this._isReachable;
    }
    set isReachable(value) {
        this._isReachable = value;
    }
    toObject() {
        return {
            isReachable: this.isReachable
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_WEBHOOK_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_WEBHOOK_CLIENT_SETTINGS = new InjectionToken('GRPC_WEBHOOK_CLIENT_SETTINGS');

/* tslint:disable */
class WebhookClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Webhook', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    responseRefinement(requestData, requestMetadata = {}) {
        return this.responseRefinement$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    responseRefinement$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/ResponseRefinement',
            requestData,
            requestMetadata,
            requestClass: WebhookRequest,
            responseClass: WebhookResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    slotFilling(requestData, requestMetadata = {}) {
        return this.slotFilling$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    slotFilling$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/SlotFilling',
            requestData,
            requestMetadata,
            requestClass: WebhookRequest,
            responseClass: WebhookResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.PingResponse>
     */
    ping(requestData, requestMetadata = {}) {
        return this.ping$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.PingResponse>>
     */
    ping$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/Ping',
            requestData,
            requestMetadata,
            requestClass: PingRequest,
            responseClass: PingResponse
        });
    }
}
WebhookClient.ɵprov = ɵɵdefineInjectable({ factory: function WebhookClient_Factory() { return new WebhookClient(ɵɵinject(GRPC_WEBHOOK_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: WebhookClient, providedIn: "root" });
WebhookClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
WebhookClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_WEBHOOK_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
class AgentsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Agents', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    createAgent(requestData, requestMetadata = {}) {
        return this.createAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    createAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/CreateAgent',
            requestData,
            requestMetadata,
            requestClass: CreateAgentRequest,
            responseClass: Agent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    updateAgent(requestData, requestMetadata = {}) {
        return this.updateAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    updateAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/UpdateAgent',
            requestData,
            requestMetadata,
            requestClass: UpdateAgentRequest,
            responseClass: Agent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    getAgent(requestData, requestMetadata = {}) {
        return this.getAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    getAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/GetAgent',
            requestData,
            requestMetadata,
            requestClass: GetAgentRequest,
            responseClass: Agent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteAgent(requestData, requestMetadata = {}) {
        return this.deleteAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/DeleteAgent',
            requestData,
            requestMetadata,
            requestClass: DeleteAgentRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteAllAgents(requestData, requestMetadata = {}) {
        return this.deleteAllAgents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAllAgents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/DeleteAllAgents',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsResponse>
     */
    listAgents(requestData, requestMetadata = {}) {
        return this.listAgents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAgents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ListAgents',
            requestData,
            requestMetadata,
            requestClass: ListAgentsRequest,
            responseClass: ListAgentsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsOfUserResponse>
     */
    listAgentsOfUser(requestData, requestMetadata = {}) {
        return this.listAgentsOfUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>
     */
    listAgentsOfUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ListAgentsOfUser',
            requestData,
            requestMetadata,
            requestClass: ListAgentsRequest,
            responseClass: ListAgentsOfUserResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsResponse>
     */
    listAllAgents(requestData, requestMetadata = {}) {
        return this.listAllAgents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAllAgents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ListAllAgents',
            requestData,
            requestMetadata,
            requestClass: ListAgentsRequest,
            responseClass: ListAgentsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddUserToProjectRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    addUserToProject(requestData, requestMetadata = {}) {
        return this.addUserToProject$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddUserToProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    addUserToProject$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/AddUserToProject',
            requestData,
            requestMetadata,
            requestClass: AddUserToProjectRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RemoveUserFromProjectRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    removeUserFromProject(requestData, requestMetadata = {}) {
        return this.removeUserFromProject$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RemoveUserFromProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    removeUserFromProject$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/RemoveUserFromProject',
            requestData,
            requestMetadata,
            requestClass: RemoveUserFromProjectRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersInProjectRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUsersInProjectResponse>
     */
    listUsersInProject(requestData, requestMetadata = {}) {
        return this.listUsersInProject$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersInProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>
     */
    listUsersInProject$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ListUsersInProject',
            requestData,
            requestMetadata,
            requestClass: ListUsersInProjectRequest,
            responseClass: ListUsersInProjectResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.GetPlatformInfoResponse>
     */
    getPlatformInfo(requestData, requestMetadata = {}) {
        return this.getPlatformInfo$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>
     */
    getPlatformInfo$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/GetPlatformInfo',
            requestData,
            requestMetadata,
            requestClass: Empty,
            responseClass: GetPlatformInfoResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListProjectPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListProjectPermissionsResponse>
     */
    listProjectPermissions(requestData, requestMetadata = {}) {
        return this.listProjectPermissions$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListProjectPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>
     */
    listProjectPermissions$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ListProjectPermissions',
            requestData,
            requestMetadata,
            requestClass: ListProjectPermissionsRequest,
            responseClass: ListProjectPermissionsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TrainAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    trainAgent(requestData, requestMetadata = {}) {
        return this.trainAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TrainAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    trainAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/TrainAgent',
            requestData,
            requestMetadata,
            requestClass: TrainAgentRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BuildCacheRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    buildCache(requestData, requestMetadata = {}) {
        return this.buildCache$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BuildCacheRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    buildCache$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/BuildCache',
            requestData,
            requestMetadata,
            requestClass: BuildCacheRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExportAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    exportAgent(requestData, requestMetadata = {}) {
        return this.exportAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExportAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    exportAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ExportAgent',
            requestData,
            requestMetadata,
            requestClass: ExportAgentRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ImportAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    importAgent(requestData, requestMetadata = {}) {
        return this.importAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ImportAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    importAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ImportAgent',
            requestData,
            requestMetadata,
            requestClass: ImportAgentRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.OptimizeRankingMatchRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    optimizeRankingMatch(requestData, requestMetadata = {}) {
        return this.optimizeRankingMatch$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.OptimizeRankingMatchRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    optimizeRankingMatch$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/OptimizeRankingMatch',
            requestData,
            requestMetadata,
            requestClass: OptimizeRankingMatchRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RestoreAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    restoreAgent(requestData, requestMetadata = {}) {
        return this.restoreAgent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RestoreAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    restoreAgent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/RestoreAgent',
            requestData,
            requestMetadata,
            requestClass: RestoreAgentRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAgentStatisticsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAgentStatisticsResponse>
     */
    getAgentStatistics(requestData, requestMetadata = {}) {
        return this.getAgentStatistics$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAgentStatisticsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>
     */
    getAgentStatistics$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/GetAgentStatistics',
            requestData,
            requestMetadata,
            requestClass: GetAgentStatisticsRequest,
            responseClass: GetAgentStatisticsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SetAgentStatusRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    setAgentStatus(requestData, requestMetadata = {}) {
        return this.setAgentStatus$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SetAgentStatusRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    setAgentStatus$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/SetAgentStatus',
            requestData,
            requestMetadata,
            requestClass: SetAgentStatusRequest,
            responseClass: Agent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SetResourcesRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    setResources(requestData, requestMetadata = {}) {
        return this.setResources$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SetResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    setResources$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/SetResources',
            requestData,
            requestMetadata,
            requestClass: SetResourcesRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteResourcesRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteResources(requestData, requestMetadata = {}) {
        return this.deleteResources$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteResources$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/DeleteResources',
            requestData,
            requestMetadata,
            requestClass: DeleteResourcesRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExportResourcesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ExportResourcesResponse>
     */
    exportResources(requestData, requestMetadata = {}) {
        return this.exportResources$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExportResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ExportResourcesResponse>>
     */
    exportResources$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Agents/ExportResources',
            requestData,
            requestMetadata,
            requestClass: ExportResourcesRequest,
            responseClass: ExportResourcesResponse
        });
    }
}
AgentsClient.ɵprov = ɵɵdefineInjectable({ factory: function AgentsClient_Factory() { return new AgentsClient(ɵɵinject(GRPC_AGENTS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: AgentsClient, providedIn: "root" });
AgentsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AgentsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_AGENTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

class FileDescriptorSet {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorSet value
     */
    constructor(value) {
        value = value || {};
        this.file = (value.file || []).map(m => new FileDescriptorProto(m));
        FileDescriptorSet.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileDescriptorSet.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileDescriptorSet();
        FileDescriptorSet.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.file = instance.file || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new FileDescriptorProto();
                    reader.readMessage(messageInitializer1, FileDescriptorProto.fromBinaryReader);
                    (instance.file = instance.file || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        FileDescriptorSet.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.file && instance.file.length) {
            writer.writeRepeatedMessage(1, instance.file, FileDescriptorProto.toBinaryWriter);
        }
    }
    get file() {
        return this._file;
    }
    set file(value) {
        this._file = value;
    }
    toObject() {
        return {
            file: (this.file || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class FileDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.package = value.package;
        this.dependency = (value.dependency || []).slice();
        this.publicDependency = (value.publicDependency || []).slice();
        this.weakDependency = (value.weakDependency || []).slice();
        this.messageType = (value.messageType || []).map(m => new DescriptorProto(m));
        this.enumType = (value.enumType || []).map(m => new EnumDescriptorProto(m));
        this.service = (value.service || []).map(m => new ServiceDescriptorProto(m));
        this.extension = (value.extension || []).map(m => new FieldDescriptorProto(m));
        this.options = value.options ? new FileOptions(value.options) : undefined;
        this.sourceCodeInfo = value.sourceCodeInfo
            ? new SourceCodeInfo(value.sourceCodeInfo)
            : undefined;
        this.syntax = value.syntax;
        FileDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileDescriptorProto();
        FileDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.package = instance.package || '';
        instance.dependency = instance.dependency || [];
        instance.publicDependency = instance.publicDependency || [];
        instance.weakDependency = instance.weakDependency || [];
        instance.messageType = instance.messageType || [];
        instance.enumType = instance.enumType || [];
        instance.service = instance.service || [];
        instance.extension = instance.extension || [];
        instance.options = instance.options || undefined;
        instance.sourceCodeInfo = instance.sourceCodeInfo || undefined;
        instance.syntax = instance.syntax || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.package = reader.readString();
                    break;
                case 3:
                    (instance.dependency = instance.dependency || []).push(reader.readString());
                    break;
                case 10:
                    (instance.publicDependency = instance.publicDependency || []).push(reader.readInt32());
                    break;
                case 11:
                    (instance.weakDependency = instance.weakDependency || []).push(reader.readInt32());
                    break;
                case 4:
                    const messageInitializer4 = new DescriptorProto();
                    reader.readMessage(messageInitializer4, DescriptorProto.fromBinaryReader);
                    (instance.messageType = instance.messageType || []).push(messageInitializer4);
                    break;
                case 5:
                    const messageInitializer5 = new EnumDescriptorProto();
                    reader.readMessage(messageInitializer5, EnumDescriptorProto.fromBinaryReader);
                    (instance.enumType = instance.enumType || []).push(messageInitializer5);
                    break;
                case 6:
                    const messageInitializer6 = new ServiceDescriptorProto();
                    reader.readMessage(messageInitializer6, ServiceDescriptorProto.fromBinaryReader);
                    (instance.service = instance.service || []).push(messageInitializer6);
                    break;
                case 7:
                    const messageInitializer7 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer7, FieldDescriptorProto.fromBinaryReader);
                    (instance.extension = instance.extension || []).push(messageInitializer7);
                    break;
                case 8:
                    instance.options = new FileOptions();
                    reader.readMessage(instance.options, FileOptions.fromBinaryReader);
                    break;
                case 9:
                    instance.sourceCodeInfo = new SourceCodeInfo();
                    reader.readMessage(instance.sourceCodeInfo, SourceCodeInfo.fromBinaryReader);
                    break;
                case 12:
                    instance.syntax = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        FileDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.package) {
            writer.writeString(2, instance.package);
        }
        if (instance.dependency && instance.dependency.length) {
            writer.writeRepeatedString(3, instance.dependency);
        }
        if (instance.publicDependency && instance.publicDependency.length) {
            writer.writeRepeatedInt32(10, instance.publicDependency);
        }
        if (instance.weakDependency && instance.weakDependency.length) {
            writer.writeRepeatedInt32(11, instance.weakDependency);
        }
        if (instance.messageType && instance.messageType.length) {
            writer.writeRepeatedMessage(4, instance.messageType, DescriptorProto.toBinaryWriter);
        }
        if (instance.enumType && instance.enumType.length) {
            writer.writeRepeatedMessage(5, instance.enumType, EnumDescriptorProto.toBinaryWriter);
        }
        if (instance.service && instance.service.length) {
            writer.writeRepeatedMessage(6, instance.service, ServiceDescriptorProto.toBinaryWriter);
        }
        if (instance.extension && instance.extension.length) {
            writer.writeRepeatedMessage(7, instance.extension, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(8, instance.options, FileOptions.toBinaryWriter);
        }
        if (instance.sourceCodeInfo) {
            writer.writeMessage(9, instance.sourceCodeInfo, SourceCodeInfo.toBinaryWriter);
        }
        if (instance.syntax) {
            writer.writeString(12, instance.syntax);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get package() {
        return this._package;
    }
    set package(value) {
        this._package = value;
    }
    get dependency() {
        return this._dependency;
    }
    set dependency(value) {
        this._dependency = value;
    }
    get publicDependency() {
        return this._publicDependency;
    }
    set publicDependency(value) {
        this._publicDependency = value;
    }
    get weakDependency() {
        return this._weakDependency;
    }
    set weakDependency(value) {
        this._weakDependency = value;
    }
    get messageType() {
        return this._messageType;
    }
    set messageType(value) {
        this._messageType = value;
    }
    get enumType() {
        return this._enumType;
    }
    set enumType(value) {
        this._enumType = value;
    }
    get service() {
        return this._service;
    }
    set service(value) {
        this._service = value;
    }
    get extension() {
        return this._extension;
    }
    set extension(value) {
        this._extension = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get sourceCodeInfo() {
        return this._sourceCodeInfo;
    }
    set sourceCodeInfo(value) {
        this._sourceCodeInfo = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    toObject() {
        return {
            name: this.name,
            package: this.package,
            dependency: (this.dependency || []).slice(),
            publicDependency: (this.publicDependency || []).slice(),
            weakDependency: (this.weakDependency || []).slice(),
            messageType: (this.messageType || []).map(m => m.toObject()),
            enumType: (this.enumType || []).map(m => m.toObject()),
            service: (this.service || []).map(m => m.toObject()),
            extension: (this.extension || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            sourceCodeInfo: this.sourceCodeInfo
                ? this.sourceCodeInfo.toObject()
                : undefined,
            syntax: this.syntax
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class DescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param DescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.field = (value.field || []).map(m => new FieldDescriptorProto(m));
        this.extension = (value.extension || []).map(m => new FieldDescriptorProto(m));
        this.nestedType = (value.nestedType || []).map(m => new DescriptorProto(m));
        this.enumType = (value.enumType || []).map(m => new EnumDescriptorProto(m));
        this.extensionRange = (value.extensionRange || []).map(m => new DescriptorProto.ExtensionRange(m));
        this.oneofDecl = (value.oneofDecl || []).map(m => new OneofDescriptorProto(m));
        this.options = value.options
            ? new MessageOptions(value.options)
            : undefined;
        this.reservedRange = (value.reservedRange || []).map(m => new DescriptorProto.ReservedRange(m));
        this.reservedName = (value.reservedName || []).slice();
        DescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DescriptorProto();
        DescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.field = instance.field || [];
        instance.extension = instance.extension || [];
        instance.nestedType = instance.nestedType || [];
        instance.enumType = instance.enumType || [];
        instance.extensionRange = instance.extensionRange || [];
        instance.oneofDecl = instance.oneofDecl || [];
        instance.options = instance.options || undefined;
        instance.reservedRange = instance.reservedRange || [];
        instance.reservedName = instance.reservedName || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer2, FieldDescriptorProto.fromBinaryReader);
                    (instance.field = instance.field || []).push(messageInitializer2);
                    break;
                case 6:
                    const messageInitializer6 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer6, FieldDescriptorProto.fromBinaryReader);
                    (instance.extension = instance.extension || []).push(messageInitializer6);
                    break;
                case 3:
                    const messageInitializer3 = new DescriptorProto();
                    reader.readMessage(messageInitializer3, DescriptorProto.fromBinaryReader);
                    (instance.nestedType = instance.nestedType || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new EnumDescriptorProto();
                    reader.readMessage(messageInitializer4, EnumDescriptorProto.fromBinaryReader);
                    (instance.enumType = instance.enumType || []).push(messageInitializer4);
                    break;
                case 5:
                    const messageInitializer5 = new DescriptorProto.ExtensionRange();
                    reader.readMessage(messageInitializer5, DescriptorProto.ExtensionRange.fromBinaryReader);
                    (instance.extensionRange = instance.extensionRange || []).push(messageInitializer5);
                    break;
                case 8:
                    const messageInitializer8 = new OneofDescriptorProto();
                    reader.readMessage(messageInitializer8, OneofDescriptorProto.fromBinaryReader);
                    (instance.oneofDecl = instance.oneofDecl || []).push(messageInitializer8);
                    break;
                case 7:
                    instance.options = new MessageOptions();
                    reader.readMessage(instance.options, MessageOptions.fromBinaryReader);
                    break;
                case 9:
                    const messageInitializer9 = new DescriptorProto.ReservedRange();
                    reader.readMessage(messageInitializer9, DescriptorProto.ReservedRange.fromBinaryReader);
                    (instance.reservedRange = instance.reservedRange || []).push(messageInitializer9);
                    break;
                case 10:
                    (instance.reservedName = instance.reservedName || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        DescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.field && instance.field.length) {
            writer.writeRepeatedMessage(2, instance.field, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.extension && instance.extension.length) {
            writer.writeRepeatedMessage(6, instance.extension, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.nestedType && instance.nestedType.length) {
            writer.writeRepeatedMessage(3, instance.nestedType, DescriptorProto.toBinaryWriter);
        }
        if (instance.enumType && instance.enumType.length) {
            writer.writeRepeatedMessage(4, instance.enumType, EnumDescriptorProto.toBinaryWriter);
        }
        if (instance.extensionRange && instance.extensionRange.length) {
            writer.writeRepeatedMessage(5, instance.extensionRange, DescriptorProto.ExtensionRange.toBinaryWriter);
        }
        if (instance.oneofDecl && instance.oneofDecl.length) {
            writer.writeRepeatedMessage(8, instance.oneofDecl, OneofDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(7, instance.options, MessageOptions.toBinaryWriter);
        }
        if (instance.reservedRange && instance.reservedRange.length) {
            writer.writeRepeatedMessage(9, instance.reservedRange, DescriptorProto.ReservedRange.toBinaryWriter);
        }
        if (instance.reservedName && instance.reservedName.length) {
            writer.writeRepeatedString(10, instance.reservedName);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get field() {
        return this._field;
    }
    set field(value) {
        this._field = value;
    }
    get extension() {
        return this._extension;
    }
    set extension(value) {
        this._extension = value;
    }
    get nestedType() {
        return this._nestedType;
    }
    set nestedType(value) {
        this._nestedType = value;
    }
    get enumType() {
        return this._enumType;
    }
    set enumType(value) {
        this._enumType = value;
    }
    get extensionRange() {
        return this._extensionRange;
    }
    set extensionRange(value) {
        this._extensionRange = value;
    }
    get oneofDecl() {
        return this._oneofDecl;
    }
    set oneofDecl(value) {
        this._oneofDecl = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get reservedRange() {
        return this._reservedRange;
    }
    set reservedRange(value) {
        this._reservedRange = value;
    }
    get reservedName() {
        return this._reservedName;
    }
    set reservedName(value) {
        this._reservedName = value;
    }
    toObject() {
        return {
            name: this.name,
            field: (this.field || []).map(m => m.toObject()),
            extension: (this.extension || []).map(m => m.toObject()),
            nestedType: (this.nestedType || []).map(m => m.toObject()),
            enumType: (this.enumType || []).map(m => m.toObject()),
            extensionRange: (this.extensionRange || []).map(m => m.toObject()),
            oneofDecl: (this.oneofDecl || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            reservedRange: (this.reservedRange || []).map(m => m.toObject()),
            reservedName: (this.reservedName || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (DescriptorProto) {
    class ExtensionRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param ExtensionRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            this.options = value.options
                ? new ExtensionRangeOptions(value.options)
                : undefined;
            ExtensionRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ExtensionRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ExtensionRange();
            ExtensionRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
            instance.options = instance.options || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    case 3:
                        instance.options = new ExtensionRangeOptions();
                        reader.readMessage(instance.options, ExtensionRangeOptions.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ExtensionRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
            if (instance.options) {
                writer.writeMessage(3, instance.options, ExtensionRangeOptions.toBinaryWriter);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        get options() {
            return this._options;
        }
        set options(value) {
            this._options = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end,
                options: this.options ? this.options.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    DescriptorProto.ExtensionRange = ExtensionRange;
    class ReservedRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param ReservedRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            ReservedRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ReservedRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ReservedRange();
            ReservedRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            ReservedRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    DescriptorProto.ReservedRange = ReservedRange;
})(DescriptorProto || (DescriptorProto = {}));
class ExtensionRangeOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtensionRangeOptions value
     */
    constructor(value) {
        value = value || {};
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        ExtensionRangeOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtensionRangeOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtensionRangeOptions();
        ExtensionRangeOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtensionRangeOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class FieldDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.number = value.number;
        this.label = value.label;
        this.type = value.type;
        this.typeName = value.typeName;
        this.extendee = value.extendee;
        this.defaultValue = value.defaultValue;
        this.oneofIndex = value.oneofIndex;
        this.jsonName = value.jsonName;
        this.options = value.options ? new FieldOptions(value.options) : undefined;
        this.proto3Optional = value.proto3Optional;
        FieldDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FieldDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FieldDescriptorProto();
        FieldDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.number = instance.number || 0;
        instance.label = instance.label || 0;
        instance.type = instance.type || 0;
        instance.typeName = instance.typeName || '';
        instance.extendee = instance.extendee || '';
        instance.defaultValue = instance.defaultValue || '';
        instance.oneofIndex = instance.oneofIndex || 0;
        instance.jsonName = instance.jsonName || '';
        instance.options = instance.options || undefined;
        instance.proto3Optional = instance.proto3Optional || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.number = reader.readInt32();
                    break;
                case 4:
                    instance.label = reader.readEnum();
                    break;
                case 5:
                    instance.type = reader.readEnum();
                    break;
                case 6:
                    instance.typeName = reader.readString();
                    break;
                case 2:
                    instance.extendee = reader.readString();
                    break;
                case 7:
                    instance.defaultValue = reader.readString();
                    break;
                case 9:
                    instance.oneofIndex = reader.readInt32();
                    break;
                case 10:
                    instance.jsonName = reader.readString();
                    break;
                case 8:
                    instance.options = new FieldOptions();
                    reader.readMessage(instance.options, FieldOptions.fromBinaryReader);
                    break;
                case 17:
                    instance.proto3Optional = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        FieldDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.number) {
            writer.writeInt32(3, instance.number);
        }
        if (instance.label) {
            writer.writeEnum(4, instance.label);
        }
        if (instance.type) {
            writer.writeEnum(5, instance.type);
        }
        if (instance.typeName) {
            writer.writeString(6, instance.typeName);
        }
        if (instance.extendee) {
            writer.writeString(2, instance.extendee);
        }
        if (instance.defaultValue) {
            writer.writeString(7, instance.defaultValue);
        }
        if (instance.oneofIndex) {
            writer.writeInt32(9, instance.oneofIndex);
        }
        if (instance.jsonName) {
            writer.writeString(10, instance.jsonName);
        }
        if (instance.options) {
            writer.writeMessage(8, instance.options, FieldOptions.toBinaryWriter);
        }
        if (instance.proto3Optional) {
            writer.writeBool(17, instance.proto3Optional);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get typeName() {
        return this._typeName;
    }
    set typeName(value) {
        this._typeName = value;
    }
    get extendee() {
        return this._extendee;
    }
    set extendee(value) {
        this._extendee = value;
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set defaultValue(value) {
        this._defaultValue = value;
    }
    get oneofIndex() {
        return this._oneofIndex;
    }
    set oneofIndex(value) {
        this._oneofIndex = value;
    }
    get jsonName() {
        return this._jsonName;
    }
    set jsonName(value) {
        this._jsonName = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get proto3Optional() {
        return this._proto3Optional;
    }
    set proto3Optional(value) {
        this._proto3Optional = value;
    }
    toObject() {
        return {
            name: this.name,
            number: this.number,
            label: this.label,
            type: this.type,
            typeName: this.typeName,
            extendee: this.extendee,
            defaultValue: this.defaultValue,
            oneofIndex: this.oneofIndex,
            jsonName: this.jsonName,
            options: this.options ? this.options.toObject() : undefined,
            proto3Optional: this.proto3Optional
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FieldDescriptorProto) {
    let Type;
    (function (Type) {
        Type[Type["typeDouble"] = 1] = "typeDouble";
        Type[Type["typeFloat"] = 2] = "typeFloat";
        Type[Type["typeInt64"] = 3] = "typeInt64";
        Type[Type["typeUint64"] = 4] = "typeUint64";
        Type[Type["typeInt32"] = 5] = "typeInt32";
        Type[Type["typeFixed64"] = 6] = "typeFixed64";
        Type[Type["typeFixed32"] = 7] = "typeFixed32";
        Type[Type["typeBool"] = 8] = "typeBool";
        Type[Type["typeString"] = 9] = "typeString";
        Type[Type["typeGroup"] = 10] = "typeGroup";
        Type[Type["typeMessage"] = 11] = "typeMessage";
        Type[Type["typeBytes"] = 12] = "typeBytes";
        Type[Type["typeUint32"] = 13] = "typeUint32";
        Type[Type["typeEnum"] = 14] = "typeEnum";
        Type[Type["typeSfixed32"] = 15] = "typeSfixed32";
        Type[Type["typeSfixed64"] = 16] = "typeSfixed64";
        Type[Type["typeSint32"] = 17] = "typeSint32";
        Type[Type["typeSint64"] = 18] = "typeSint64";
    })(Type = FieldDescriptorProto.Type || (FieldDescriptorProto.Type = {}));
    let Label;
    (function (Label) {
        Label[Label["labelOptional"] = 1] = "labelOptional";
        Label[Label["labelRequired"] = 2] = "labelRequired";
        Label[Label["labelRepeated"] = 3] = "labelRepeated";
    })(Label = FieldDescriptorProto.Label || (FieldDescriptorProto.Label = {}));
})(FieldDescriptorProto || (FieldDescriptorProto = {}));
class OneofDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.options = value.options ? new OneofOptions(value.options) : undefined;
        OneofDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OneofDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OneofDescriptorProto();
        OneofDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.options = new OneofOptions();
                    reader.readMessage(instance.options, OneofOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OneofDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.options) {
            writer.writeMessage(2, instance.options, OneofOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EnumDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.value = (value.value || []).map(m => new EnumValueDescriptorProto(m));
        this.options = value.options ? new EnumOptions(value.options) : undefined;
        this.reservedRange = (value.reservedRange || []).map(m => new EnumDescriptorProto.EnumReservedRange(m));
        this.reservedName = (value.reservedName || []).slice();
        EnumDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumDescriptorProto();
        EnumDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.value = instance.value || [];
        instance.options = instance.options || undefined;
        instance.reservedRange = instance.reservedRange || [];
        instance.reservedName = instance.reservedName || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EnumValueDescriptorProto();
                    reader.readMessage(messageInitializer2, EnumValueDescriptorProto.fromBinaryReader);
                    (instance.value = instance.value || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.options = new EnumOptions();
                    reader.readMessage(instance.options, EnumOptions.fromBinaryReader);
                    break;
                case 4:
                    const messageInitializer4 = new EnumDescriptorProto.EnumReservedRange();
                    reader.readMessage(messageInitializer4, EnumDescriptorProto.EnumReservedRange.fromBinaryReader);
                    (instance.reservedRange = instance.reservedRange || []).push(messageInitializer4);
                    break;
                case 5:
                    (instance.reservedName = instance.reservedName || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.value && instance.value.length) {
            writer.writeRepeatedMessage(2, instance.value, EnumValueDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, EnumOptions.toBinaryWriter);
        }
        if (instance.reservedRange && instance.reservedRange.length) {
            writer.writeRepeatedMessage(4, instance.reservedRange, EnumDescriptorProto.EnumReservedRange.toBinaryWriter);
        }
        if (instance.reservedName && instance.reservedName.length) {
            writer.writeRepeatedString(5, instance.reservedName);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get reservedRange() {
        return this._reservedRange;
    }
    set reservedRange(value) {
        this._reservedRange = value;
    }
    get reservedName() {
        return this._reservedName;
    }
    set reservedName(value) {
        this._reservedName = value;
    }
    toObject() {
        return {
            name: this.name,
            value: (this.value || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            reservedRange: (this.reservedRange || []).map(m => m.toObject()),
            reservedName: (this.reservedName || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EnumDescriptorProto) {
    class EnumReservedRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param EnumReservedRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            EnumReservedRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            EnumReservedRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new EnumReservedRange();
            EnumReservedRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            EnumReservedRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    EnumDescriptorProto.EnumReservedRange = EnumReservedRange;
})(EnumDescriptorProto || (EnumDescriptorProto = {}));
class EnumValueDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.number = value.number;
        this.options = value.options
            ? new EnumValueOptions(value.options)
            : undefined;
        EnumValueDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumValueDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumValueDescriptorProto();
        EnumValueDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.number = instance.number || 0;
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.number = reader.readInt32();
                    break;
                case 3:
                    instance.options = new EnumValueOptions();
                    reader.readMessage(instance.options, EnumValueOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumValueDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.number) {
            writer.writeInt32(2, instance.number);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, EnumValueOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            number: this.number,
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ServiceDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.method = (value.method || []).map(m => new MethodDescriptorProto(m));
        this.options = value.options
            ? new ServiceOptions(value.options)
            : undefined;
        ServiceDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServiceDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServiceDescriptorProto();
        ServiceDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.method = instance.method || [];
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new MethodDescriptorProto();
                    reader.readMessage(messageInitializer2, MethodDescriptorProto.fromBinaryReader);
                    (instance.method = instance.method || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.options = new ServiceOptions();
                    reader.readMessage(instance.options, ServiceOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ServiceDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.method && instance.method.length) {
            writer.writeRepeatedMessage(2, instance.method, MethodDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, ServiceOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get method() {
        return this._method;
    }
    set method(value) {
        this._method = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            method: (this.method || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class MethodDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.inputType = value.inputType;
        this.outputType = value.outputType;
        this.options = value.options ? new MethodOptions(value.options) : undefined;
        this.clientStreaming = value.clientStreaming;
        this.serverStreaming = value.serverStreaming;
        MethodDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MethodDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MethodDescriptorProto();
        MethodDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.inputType = instance.inputType || '';
        instance.outputType = instance.outputType || '';
        instance.options = instance.options || undefined;
        instance.clientStreaming = instance.clientStreaming || false;
        instance.serverStreaming = instance.serverStreaming || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.inputType = reader.readString();
                    break;
                case 3:
                    instance.outputType = reader.readString();
                    break;
                case 4:
                    instance.options = new MethodOptions();
                    reader.readMessage(instance.options, MethodOptions.fromBinaryReader);
                    break;
                case 5:
                    instance.clientStreaming = reader.readBool();
                    break;
                case 6:
                    instance.serverStreaming = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        MethodDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.inputType) {
            writer.writeString(2, instance.inputType);
        }
        if (instance.outputType) {
            writer.writeString(3, instance.outputType);
        }
        if (instance.options) {
            writer.writeMessage(4, instance.options, MethodOptions.toBinaryWriter);
        }
        if (instance.clientStreaming) {
            writer.writeBool(5, instance.clientStreaming);
        }
        if (instance.serverStreaming) {
            writer.writeBool(6, instance.serverStreaming);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get inputType() {
        return this._inputType;
    }
    set inputType(value) {
        this._inputType = value;
    }
    get outputType() {
        return this._outputType;
    }
    set outputType(value) {
        this._outputType = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get clientStreaming() {
        return this._clientStreaming;
    }
    set clientStreaming(value) {
        this._clientStreaming = value;
    }
    get serverStreaming() {
        return this._serverStreaming;
    }
    set serverStreaming(value) {
        this._serverStreaming = value;
    }
    toObject() {
        return {
            name: this.name,
            inputType: this.inputType,
            outputType: this.outputType,
            options: this.options ? this.options.toObject() : undefined,
            clientStreaming: this.clientStreaming,
            serverStreaming: this.serverStreaming
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class FileOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileOptions value
     */
    constructor(value) {
        value = value || {};
        this.javaPackage = value.javaPackage;
        this.javaOuterClassname = value.javaOuterClassname;
        this.javaMultipleFiles = value.javaMultipleFiles;
        this.javaGenerateEqualsAndHash = value.javaGenerateEqualsAndHash;
        this.javaStringCheckUtf8 = value.javaStringCheckUtf8;
        this.optimizeFor = value.optimizeFor;
        this.goPackage = value.goPackage;
        this.ccGenericServices = value.ccGenericServices;
        this.javaGenericServices = value.javaGenericServices;
        this.pyGenericServices = value.pyGenericServices;
        this.phpGenericServices = value.phpGenericServices;
        this.deprecated = value.deprecated;
        this.ccEnableArenas = value.ccEnableArenas;
        this.objcClassPrefix = value.objcClassPrefix;
        this.csharpNamespace = value.csharpNamespace;
        this.swiftPrefix = value.swiftPrefix;
        this.phpClassPrefix = value.phpClassPrefix;
        this.phpNamespace = value.phpNamespace;
        this.phpMetadataNamespace = value.phpMetadataNamespace;
        this.rubyPackage = value.rubyPackage;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        FileOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileOptions();
        FileOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.javaPackage = instance.javaPackage || '';
        instance.javaOuterClassname = instance.javaOuterClassname || '';
        instance.javaMultipleFiles = instance.javaMultipleFiles || false;
        instance.javaGenerateEqualsAndHash =
            instance.javaGenerateEqualsAndHash || false;
        instance.javaStringCheckUtf8 = instance.javaStringCheckUtf8 || false;
        instance.optimizeFor = instance.optimizeFor || 0;
        instance.goPackage = instance.goPackage || '';
        instance.ccGenericServices = instance.ccGenericServices || false;
        instance.javaGenericServices = instance.javaGenericServices || false;
        instance.pyGenericServices = instance.pyGenericServices || false;
        instance.phpGenericServices = instance.phpGenericServices || false;
        instance.deprecated = instance.deprecated || false;
        instance.ccEnableArenas = instance.ccEnableArenas || false;
        instance.objcClassPrefix = instance.objcClassPrefix || '';
        instance.csharpNamespace = instance.csharpNamespace || '';
        instance.swiftPrefix = instance.swiftPrefix || '';
        instance.phpClassPrefix = instance.phpClassPrefix || '';
        instance.phpNamespace = instance.phpNamespace || '';
        instance.phpMetadataNamespace = instance.phpMetadataNamespace || '';
        instance.rubyPackage = instance.rubyPackage || '';
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.javaPackage = reader.readString();
                    break;
                case 8:
                    instance.javaOuterClassname = reader.readString();
                    break;
                case 10:
                    instance.javaMultipleFiles = reader.readBool();
                    break;
                case 20:
                    instance.javaGenerateEqualsAndHash = reader.readBool();
                    break;
                case 27:
                    instance.javaStringCheckUtf8 = reader.readBool();
                    break;
                case 9:
                    instance.optimizeFor = reader.readEnum();
                    break;
                case 11:
                    instance.goPackage = reader.readString();
                    break;
                case 16:
                    instance.ccGenericServices = reader.readBool();
                    break;
                case 17:
                    instance.javaGenericServices = reader.readBool();
                    break;
                case 18:
                    instance.pyGenericServices = reader.readBool();
                    break;
                case 42:
                    instance.phpGenericServices = reader.readBool();
                    break;
                case 23:
                    instance.deprecated = reader.readBool();
                    break;
                case 31:
                    instance.ccEnableArenas = reader.readBool();
                    break;
                case 36:
                    instance.objcClassPrefix = reader.readString();
                    break;
                case 37:
                    instance.csharpNamespace = reader.readString();
                    break;
                case 39:
                    instance.swiftPrefix = reader.readString();
                    break;
                case 40:
                    instance.phpClassPrefix = reader.readString();
                    break;
                case 41:
                    instance.phpNamespace = reader.readString();
                    break;
                case 44:
                    instance.phpMetadataNamespace = reader.readString();
                    break;
                case 45:
                    instance.rubyPackage = reader.readString();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        FileOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.javaPackage) {
            writer.writeString(1, instance.javaPackage);
        }
        if (instance.javaOuterClassname) {
            writer.writeString(8, instance.javaOuterClassname);
        }
        if (instance.javaMultipleFiles) {
            writer.writeBool(10, instance.javaMultipleFiles);
        }
        if (instance.javaGenerateEqualsAndHash) {
            writer.writeBool(20, instance.javaGenerateEqualsAndHash);
        }
        if (instance.javaStringCheckUtf8) {
            writer.writeBool(27, instance.javaStringCheckUtf8);
        }
        if (instance.optimizeFor) {
            writer.writeEnum(9, instance.optimizeFor);
        }
        if (instance.goPackage) {
            writer.writeString(11, instance.goPackage);
        }
        if (instance.ccGenericServices) {
            writer.writeBool(16, instance.ccGenericServices);
        }
        if (instance.javaGenericServices) {
            writer.writeBool(17, instance.javaGenericServices);
        }
        if (instance.pyGenericServices) {
            writer.writeBool(18, instance.pyGenericServices);
        }
        if (instance.phpGenericServices) {
            writer.writeBool(42, instance.phpGenericServices);
        }
        if (instance.deprecated) {
            writer.writeBool(23, instance.deprecated);
        }
        if (instance.ccEnableArenas) {
            writer.writeBool(31, instance.ccEnableArenas);
        }
        if (instance.objcClassPrefix) {
            writer.writeString(36, instance.objcClassPrefix);
        }
        if (instance.csharpNamespace) {
            writer.writeString(37, instance.csharpNamespace);
        }
        if (instance.swiftPrefix) {
            writer.writeString(39, instance.swiftPrefix);
        }
        if (instance.phpClassPrefix) {
            writer.writeString(40, instance.phpClassPrefix);
        }
        if (instance.phpNamespace) {
            writer.writeString(41, instance.phpNamespace);
        }
        if (instance.phpMetadataNamespace) {
            writer.writeString(44, instance.phpMetadataNamespace);
        }
        if (instance.rubyPackage) {
            writer.writeString(45, instance.rubyPackage);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get javaPackage() {
        return this._javaPackage;
    }
    set javaPackage(value) {
        this._javaPackage = value;
    }
    get javaOuterClassname() {
        return this._javaOuterClassname;
    }
    set javaOuterClassname(value) {
        this._javaOuterClassname = value;
    }
    get javaMultipleFiles() {
        return this._javaMultipleFiles;
    }
    set javaMultipleFiles(value) {
        this._javaMultipleFiles = value;
    }
    get javaGenerateEqualsAndHash() {
        return this._javaGenerateEqualsAndHash;
    }
    set javaGenerateEqualsAndHash(value) {
        this._javaGenerateEqualsAndHash = value;
    }
    get javaStringCheckUtf8() {
        return this._javaStringCheckUtf8;
    }
    set javaStringCheckUtf8(value) {
        this._javaStringCheckUtf8 = value;
    }
    get optimizeFor() {
        return this._optimizeFor;
    }
    set optimizeFor(value) {
        this._optimizeFor = value;
    }
    get goPackage() {
        return this._goPackage;
    }
    set goPackage(value) {
        this._goPackage = value;
    }
    get ccGenericServices() {
        return this._ccGenericServices;
    }
    set ccGenericServices(value) {
        this._ccGenericServices = value;
    }
    get javaGenericServices() {
        return this._javaGenericServices;
    }
    set javaGenericServices(value) {
        this._javaGenericServices = value;
    }
    get pyGenericServices() {
        return this._pyGenericServices;
    }
    set pyGenericServices(value) {
        this._pyGenericServices = value;
    }
    get phpGenericServices() {
        return this._phpGenericServices;
    }
    set phpGenericServices(value) {
        this._phpGenericServices = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get ccEnableArenas() {
        return this._ccEnableArenas;
    }
    set ccEnableArenas(value) {
        this._ccEnableArenas = value;
    }
    get objcClassPrefix() {
        return this._objcClassPrefix;
    }
    set objcClassPrefix(value) {
        this._objcClassPrefix = value;
    }
    get csharpNamespace() {
        return this._csharpNamespace;
    }
    set csharpNamespace(value) {
        this._csharpNamespace = value;
    }
    get swiftPrefix() {
        return this._swiftPrefix;
    }
    set swiftPrefix(value) {
        this._swiftPrefix = value;
    }
    get phpClassPrefix() {
        return this._phpClassPrefix;
    }
    set phpClassPrefix(value) {
        this._phpClassPrefix = value;
    }
    get phpNamespace() {
        return this._phpNamespace;
    }
    set phpNamespace(value) {
        this._phpNamespace = value;
    }
    get phpMetadataNamespace() {
        return this._phpMetadataNamespace;
    }
    set phpMetadataNamespace(value) {
        this._phpMetadataNamespace = value;
    }
    get rubyPackage() {
        return this._rubyPackage;
    }
    set rubyPackage(value) {
        this._rubyPackage = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            javaPackage: this.javaPackage,
            javaOuterClassname: this.javaOuterClassname,
            javaMultipleFiles: this.javaMultipleFiles,
            javaGenerateEqualsAndHash: this.javaGenerateEqualsAndHash,
            javaStringCheckUtf8: this.javaStringCheckUtf8,
            optimizeFor: this.optimizeFor,
            goPackage: this.goPackage,
            ccGenericServices: this.ccGenericServices,
            javaGenericServices: this.javaGenericServices,
            pyGenericServices: this.pyGenericServices,
            phpGenericServices: this.phpGenericServices,
            deprecated: this.deprecated,
            ccEnableArenas: this.ccEnableArenas,
            objcClassPrefix: this.objcClassPrefix,
            csharpNamespace: this.csharpNamespace,
            swiftPrefix: this.swiftPrefix,
            phpClassPrefix: this.phpClassPrefix,
            phpNamespace: this.phpNamespace,
            phpMetadataNamespace: this.phpMetadataNamespace,
            rubyPackage: this.rubyPackage,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FileOptions) {
    let OptimizeMode;
    (function (OptimizeMode) {
        OptimizeMode[OptimizeMode["speed"] = 1] = "speed";
        OptimizeMode[OptimizeMode["codeSize"] = 2] = "codeSize";
        OptimizeMode[OptimizeMode["liteRuntime"] = 3] = "liteRuntime";
    })(OptimizeMode = FileOptions.OptimizeMode || (FileOptions.OptimizeMode = {}));
})(FileOptions || (FileOptions = {}));
class MessageOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param MessageOptions value
     */
    constructor(value) {
        value = value || {};
        this.messageSetWireFormat = value.messageSetWireFormat;
        this.noStandardDescriptorAccessor = value.noStandardDescriptorAccessor;
        this.deprecated = value.deprecated;
        this.mapEntry = value.mapEntry;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        MessageOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MessageOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MessageOptions();
        MessageOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.messageSetWireFormat = instance.messageSetWireFormat || false;
        instance.noStandardDescriptorAccessor =
            instance.noStandardDescriptorAccessor || false;
        instance.deprecated = instance.deprecated || false;
        instance.mapEntry = instance.mapEntry || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.messageSetWireFormat = reader.readBool();
                    break;
                case 2:
                    instance.noStandardDescriptorAccessor = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 7:
                    instance.mapEntry = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        MessageOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.messageSetWireFormat) {
            writer.writeBool(1, instance.messageSetWireFormat);
        }
        if (instance.noStandardDescriptorAccessor) {
            writer.writeBool(2, instance.noStandardDescriptorAccessor);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.mapEntry) {
            writer.writeBool(7, instance.mapEntry);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get messageSetWireFormat() {
        return this._messageSetWireFormat;
    }
    set messageSetWireFormat(value) {
        this._messageSetWireFormat = value;
    }
    get noStandardDescriptorAccessor() {
        return this._noStandardDescriptorAccessor;
    }
    set noStandardDescriptorAccessor(value) {
        this._noStandardDescriptorAccessor = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get mapEntry() {
        return this._mapEntry;
    }
    set mapEntry(value) {
        this._mapEntry = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            messageSetWireFormat: this.messageSetWireFormat,
            noStandardDescriptorAccessor: this.noStandardDescriptorAccessor,
            deprecated: this.deprecated,
            mapEntry: this.mapEntry,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class FieldOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldOptions value
     */
    constructor(value) {
        value = value || {};
        this.ctype = value.ctype;
        this.packed = value.packed;
        this.jstype = value.jstype;
        this.lazy = value.lazy;
        this.deprecated = value.deprecated;
        this.weak = value.weak;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        FieldOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FieldOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FieldOptions();
        FieldOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.ctype = instance.ctype || 0;
        instance.packed = instance.packed || false;
        instance.jstype = instance.jstype || 0;
        instance.lazy = instance.lazy || false;
        instance.deprecated = instance.deprecated || false;
        instance.weak = instance.weak || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.ctype = reader.readEnum();
                    break;
                case 2:
                    instance.packed = reader.readBool();
                    break;
                case 6:
                    instance.jstype = reader.readEnum();
                    break;
                case 5:
                    instance.lazy = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 10:
                    instance.weak = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        FieldOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.ctype) {
            writer.writeEnum(1, instance.ctype);
        }
        if (instance.packed) {
            writer.writeBool(2, instance.packed);
        }
        if (instance.jstype) {
            writer.writeEnum(6, instance.jstype);
        }
        if (instance.lazy) {
            writer.writeBool(5, instance.lazy);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.weak) {
            writer.writeBool(10, instance.weak);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get ctype() {
        return this._ctype;
    }
    set ctype(value) {
        this._ctype = value;
    }
    get packed() {
        return this._packed;
    }
    set packed(value) {
        this._packed = value;
    }
    get jstype() {
        return this._jstype;
    }
    set jstype(value) {
        this._jstype = value;
    }
    get lazy() {
        return this._lazy;
    }
    set lazy(value) {
        this._lazy = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get weak() {
        return this._weak;
    }
    set weak(value) {
        this._weak = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            ctype: this.ctype,
            packed: this.packed,
            jstype: this.jstype,
            lazy: this.lazy,
            deprecated: this.deprecated,
            weak: this.weak,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FieldOptions) {
    let CType;
    (function (CType) {
        CType[CType["string"] = 0] = "string";
        CType[CType["cord"] = 1] = "cord";
        CType[CType["stringPiece"] = 2] = "stringPiece";
    })(CType = FieldOptions.CType || (FieldOptions.CType = {}));
    let JSType;
    (function (JSType) {
        JSType[JSType["jsNormal"] = 0] = "jsNormal";
        JSType[JSType["jsString"] = 1] = "jsString";
        JSType[JSType["jsNumber"] = 2] = "jsNumber";
    })(JSType = FieldOptions.JSType || (FieldOptions.JSType = {}));
})(FieldOptions || (FieldOptions = {}));
class OneofOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofOptions value
     */
    constructor(value) {
        value = value || {};
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        OneofOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OneofOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OneofOptions();
        OneofOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        OneofOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EnumOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumOptions value
     */
    constructor(value) {
        value = value || {};
        this.allowAlias = value.allowAlias;
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        EnumOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumOptions();
        EnumOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.allowAlias = instance.allowAlias || false;
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    instance.allowAlias = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.allowAlias) {
            writer.writeBool(2, instance.allowAlias);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get allowAlias() {
        return this._allowAlias;
    }
    set allowAlias(value) {
        this._allowAlias = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            allowAlias: this.allowAlias,
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class EnumValueOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        EnumValueOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumValueOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumValueOptions();
        EnumValueOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumValueOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(1, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ServiceOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        ServiceOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServiceOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServiceOptions();
        ServiceOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        ServiceOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(33, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class MethodOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.idempotencyLevel = value.idempotencyLevel;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        MethodOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MethodOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MethodOptions();
        MethodOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.idempotencyLevel = instance.idempotencyLevel || 0;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    instance.deprecated = reader.readBool();
                    break;
                case 34:
                    instance.idempotencyLevel = reader.readEnum();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        MethodOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(33, instance.deprecated);
        }
        if (instance.idempotencyLevel) {
            writer.writeEnum(34, instance.idempotencyLevel);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get idempotencyLevel() {
        return this._idempotencyLevel;
    }
    set idempotencyLevel(value) {
        this._idempotencyLevel = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            idempotencyLevel: this.idempotencyLevel,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (MethodOptions) {
    let IdempotencyLevel;
    (function (IdempotencyLevel) {
        IdempotencyLevel[IdempotencyLevel["idempotencyUnknown"] = 0] = "idempotencyUnknown";
        IdempotencyLevel[IdempotencyLevel["noSideEffects"] = 1] = "noSideEffects";
        IdempotencyLevel[IdempotencyLevel["idempotent"] = 2] = "idempotent";
    })(IdempotencyLevel = MethodOptions.IdempotencyLevel || (MethodOptions.IdempotencyLevel = {}));
})(MethodOptions || (MethodOptions = {}));
class UninterpretedOption {
    /**
     * Creates an object and applies default Protobuf values
     * @param UninterpretedOption value
     */
    constructor(value) {
        value = value || {};
        this.name = (value.name || []).map(m => new UninterpretedOption.NamePart(m));
        this.identifierValue = value.identifierValue;
        this.positiveIntValue = value.positiveIntValue;
        this.negativeIntValue = value.negativeIntValue;
        this.doubleValue = value.doubleValue;
        this.stringValue = value.stringValue;
        this.aggregateValue = value.aggregateValue;
        UninterpretedOption.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UninterpretedOption.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UninterpretedOption();
        UninterpretedOption.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || [];
        instance.identifierValue = instance.identifierValue || '';
        instance.positiveIntValue = instance.positiveIntValue || '0';
        instance.negativeIntValue = instance.negativeIntValue || '0';
        instance.doubleValue = instance.doubleValue || 0;
        instance.stringValue = instance.stringValue || new Uint8Array();
        instance.aggregateValue = instance.aggregateValue || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    const messageInitializer2 = new UninterpretedOption.NamePart();
                    reader.readMessage(messageInitializer2, UninterpretedOption.NamePart.fromBinaryReader);
                    (instance.name = instance.name || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.identifierValue = reader.readString();
                    break;
                case 4:
                    instance.positiveIntValue = reader.readUint64String();
                    break;
                case 5:
                    instance.negativeIntValue = reader.readInt64String();
                    break;
                case 6:
                    instance.doubleValue = reader.readDouble();
                    break;
                case 7:
                    instance.stringValue = reader.readBytes();
                    break;
                case 8:
                    instance.aggregateValue = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        UninterpretedOption.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name && instance.name.length) {
            writer.writeRepeatedMessage(2, instance.name, UninterpretedOption.NamePart.toBinaryWriter);
        }
        if (instance.identifierValue) {
            writer.writeString(3, instance.identifierValue);
        }
        if (instance.positiveIntValue) {
            writer.writeUint64String(4, instance.positiveIntValue);
        }
        if (instance.negativeIntValue) {
            writer.writeInt64String(5, instance.negativeIntValue);
        }
        if (instance.doubleValue) {
            writer.writeDouble(6, instance.doubleValue);
        }
        if (instance.stringValue && instance.stringValue.length) {
            writer.writeBytes(7, instance.stringValue);
        }
        if (instance.aggregateValue) {
            writer.writeString(8, instance.aggregateValue);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get identifierValue() {
        return this._identifierValue;
    }
    set identifierValue(value) {
        this._identifierValue = value;
    }
    get positiveIntValue() {
        return this._positiveIntValue;
    }
    set positiveIntValue(value) {
        this._positiveIntValue = value;
    }
    get negativeIntValue() {
        return this._negativeIntValue;
    }
    set negativeIntValue(value) {
        this._negativeIntValue = value;
    }
    get doubleValue() {
        return this._doubleValue;
    }
    set doubleValue(value) {
        this._doubleValue = value;
    }
    get stringValue() {
        return this._stringValue;
    }
    set stringValue(value) {
        this._stringValue = value;
    }
    get aggregateValue() {
        return this._aggregateValue;
    }
    set aggregateValue(value) {
        this._aggregateValue = value;
    }
    toObject() {
        return {
            name: (this.name || []).map(m => m.toObject()),
            identifierValue: this.identifierValue,
            positiveIntValue: this.positiveIntValue,
            negativeIntValue: this.negativeIntValue,
            doubleValue: this.doubleValue,
            stringValue: this.stringValue
                ? this.stringValue.subarray(0)
                : new Uint8Array(),
            aggregateValue: this.aggregateValue
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (UninterpretedOption) {
    class NamePart {
        /**
         * Creates an object and applies default Protobuf values
         * @param NamePart value
         */
        constructor(value) {
            value = value || {};
            this.namePart = value.namePart;
            this.isExtension = value.isExtension;
            NamePart.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            NamePart.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new NamePart();
            NamePart.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.namePart = instance.namePart || '';
            instance.isExtension = instance.isExtension || false;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.namePart = reader.readString();
                        break;
                    case 2:
                        instance.isExtension = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            NamePart.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.namePart) {
                writer.writeString(1, instance.namePart);
            }
            if (instance.isExtension) {
                writer.writeBool(2, instance.isExtension);
            }
        }
        get namePart() {
            return this._namePart;
        }
        set namePart(value) {
            this._namePart = value;
        }
        get isExtension() {
            return this._isExtension;
        }
        set isExtension(value) {
            this._isExtension = value;
        }
        toObject() {
            return {
                namePart: this.namePart,
                isExtension: this.isExtension
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    UninterpretedOption.NamePart = NamePart;
})(UninterpretedOption || (UninterpretedOption = {}));
class SourceCodeInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param SourceCodeInfo value
     */
    constructor(value) {
        value = value || {};
        this.location = (value.location || []).map(m => new SourceCodeInfo.Location(m));
        SourceCodeInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SourceCodeInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SourceCodeInfo();
        SourceCodeInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.location = instance.location || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SourceCodeInfo.Location();
                    reader.readMessage(messageInitializer1, SourceCodeInfo.Location.fromBinaryReader);
                    (instance.location = instance.location || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        SourceCodeInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.location && instance.location.length) {
            writer.writeRepeatedMessage(1, instance.location, SourceCodeInfo.Location.toBinaryWriter);
        }
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    toObject() {
        return {
            location: (this.location || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (SourceCodeInfo) {
    class Location {
        /**
         * Creates an object and applies default Protobuf values
         * @param Location value
         */
        constructor(value) {
            value = value || {};
            this.path = (value.path || []).slice();
            this.span = (value.span || []).slice();
            this.leadingComments = value.leadingComments;
            this.trailingComments = value.trailingComments;
            this.leadingDetachedComments = (value.leadingDetachedComments || []).slice();
            Location.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Location.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Location();
            Location.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.path = instance.path || [];
            instance.span = instance.span || [];
            instance.leadingComments = instance.leadingComments || '';
            instance.trailingComments = instance.trailingComments || '';
            instance.leadingDetachedComments = instance.leadingDetachedComments || [];
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        (instance.path = instance.path || []).push(reader.readInt32());
                        break;
                    case 2:
                        (instance.span = instance.span || []).push(reader.readInt32());
                        break;
                    case 3:
                        instance.leadingComments = reader.readString();
                        break;
                    case 4:
                        instance.trailingComments = reader.readString();
                        break;
                    case 6:
                        (instance.leadingDetachedComments =
                            instance.leadingDetachedComments || []).push(reader.readString());
                        break;
                    default:
                        reader.skipField();
                }
            }
            Location.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.path && instance.path.length) {
                writer.writeRepeatedInt32(1, instance.path);
            }
            if (instance.span && instance.span.length) {
                writer.writeRepeatedInt32(2, instance.span);
            }
            if (instance.leadingComments) {
                writer.writeString(3, instance.leadingComments);
            }
            if (instance.trailingComments) {
                writer.writeString(4, instance.trailingComments);
            }
            if (instance.leadingDetachedComments &&
                instance.leadingDetachedComments.length) {
                writer.writeRepeatedString(6, instance.leadingDetachedComments);
            }
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get span() {
            return this._span;
        }
        set span(value) {
            this._span = value;
        }
        get leadingComments() {
            return this._leadingComments;
        }
        set leadingComments(value) {
            this._leadingComments = value;
        }
        get trailingComments() {
            return this._trailingComments;
        }
        set trailingComments(value) {
            this._trailingComments = value;
        }
        get leadingDetachedComments() {
            return this._leadingDetachedComments;
        }
        set leadingDetachedComments(value) {
            this._leadingDetachedComments = value;
        }
        toObject() {
            return {
                path: (this.path || []).slice(),
                span: (this.span || []).slice(),
                leadingComments: this.leadingComments,
                trailingComments: this.trailingComments,
                leadingDetachedComments: (this.leadingDetachedComments || []).slice()
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    SourceCodeInfo.Location = Location;
})(SourceCodeInfo || (SourceCodeInfo = {}));
class GeneratedCodeInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param GeneratedCodeInfo value
     */
    constructor(value) {
        value = value || {};
        this.annotation = (value.annotation || []).map(m => new GeneratedCodeInfo.Annotation(m));
        GeneratedCodeInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GeneratedCodeInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GeneratedCodeInfo();
        GeneratedCodeInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.annotation = instance.annotation || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new GeneratedCodeInfo.Annotation();
                    reader.readMessage(messageInitializer1, GeneratedCodeInfo.Annotation.fromBinaryReader);
                    (instance.annotation = instance.annotation || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GeneratedCodeInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.annotation && instance.annotation.length) {
            writer.writeRepeatedMessage(1, instance.annotation, GeneratedCodeInfo.Annotation.toBinaryWriter);
        }
    }
    get annotation() {
        return this._annotation;
    }
    set annotation(value) {
        this._annotation = value;
    }
    toObject() {
        return {
            annotation: (this.annotation || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GeneratedCodeInfo) {
    class Annotation {
        /**
         * Creates an object and applies default Protobuf values
         * @param Annotation value
         */
        constructor(value) {
            value = value || {};
            this.path = (value.path || []).slice();
            this.sourceFile = value.sourceFile;
            this.begin = value.begin;
            this.end = value.end;
            Annotation.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Annotation.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Annotation();
            Annotation.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.path = instance.path || [];
            instance.sourceFile = instance.sourceFile || '';
            instance.begin = instance.begin || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        (instance.path = instance.path || []).push(reader.readInt32());
                        break;
                    case 2:
                        instance.sourceFile = reader.readString();
                        break;
                    case 3:
                        instance.begin = reader.readInt32();
                        break;
                    case 4:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Annotation.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.path && instance.path.length) {
                writer.writeRepeatedInt32(1, instance.path);
            }
            if (instance.sourceFile) {
                writer.writeString(2, instance.sourceFile);
            }
            if (instance.begin) {
                writer.writeInt32(3, instance.begin);
            }
            if (instance.end) {
                writer.writeInt32(4, instance.end);
            }
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get sourceFile() {
            return this._sourceFile;
        }
        set sourceFile(value) {
            this._sourceFile = value;
        }
        get begin() {
            return this._begin;
        }
        set begin(value) {
            this._begin = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                path: (this.path || []).slice(),
                sourceFile: this.sourceFile,
                begin: this.begin,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    GeneratedCodeInfo.Annotation = Annotation;
})(GeneratedCodeInfo || (GeneratedCodeInfo = {}));

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_OPERATIONS_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_OPERATIONS_CLIENT_SETTINGS = new InjectionToken('GRPC_OPERATIONS_CLIENT_SETTINGS');

/* tslint:disable */
class OperationsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('google.longrunning.Operations', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData, requestMetadata = {}) {
        return this.listOperations$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListOperationsResponse>>
     */
    listOperations$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/ListOperations',
            requestData,
            requestMetadata,
            requestClass: ListOperationsRequest,
            responseClass: ListOperationsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Operation>
     */
    getOperation(requestData, requestMetadata = {}) {
        return this.getOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Operation>>
     */
    getOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/GetOperation',
            requestData,
            requestMetadata,
            requestClass: GetOperationRequest,
            responseClass: Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteOperation(requestData, requestMetadata = {}) {
        return this.deleteOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/DeleteOperation',
            requestData,
            requestMetadata,
            requestClass: DeleteOperationRequest,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    cancelOperation(requestData, requestMetadata = {}) {
        return this.cancelOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    cancelOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/CancelOperation',
            requestData,
            requestMetadata,
            requestClass: CancelOperationRequest,
            responseClass: Empty
        });
    }
}
OperationsClient.ɵprov = ɵɵdefineInjectable({ factory: function OperationsClient_Factory() { return new OperationsClient(ɵɵinject(GRPC_OPERATIONS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: OperationsClient, providedIn: "root" });
OperationsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OperationsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_OPERATIONS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

class Http {
    /**
     * Creates an object and applies default Protobuf values
     * @param Http value
     */
    constructor(value) {
        value = value || {};
        this.rules = (value.rules || []).map(m => new HttpRule(m));
        this.fullyDecodeReservedExpansion = value.fullyDecodeReservedExpansion;
        Http.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Http.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Http();
        Http.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.rules = instance.rules || [];
        instance.fullyDecodeReservedExpansion =
            instance.fullyDecodeReservedExpansion || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new HttpRule();
                    reader.readMessage(messageInitializer1, HttpRule.fromBinaryReader);
                    (instance.rules = instance.rules || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.fullyDecodeReservedExpansion = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        Http.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.rules && instance.rules.length) {
            writer.writeRepeatedMessage(1, instance.rules, HttpRule.toBinaryWriter);
        }
        if (instance.fullyDecodeReservedExpansion) {
            writer.writeBool(2, instance.fullyDecodeReservedExpansion);
        }
    }
    get rules() {
        return this._rules;
    }
    set rules(value) {
        this._rules = value;
    }
    get fullyDecodeReservedExpansion() {
        return this._fullyDecodeReservedExpansion;
    }
    set fullyDecodeReservedExpansion(value) {
        this._fullyDecodeReservedExpansion = value;
    }
    toObject() {
        return {
            rules: (this.rules || []).map(m => m.toObject()),
            fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class HttpRule {
    /**
     * Creates an object and applies default Protobuf values
     * @param HttpRule value
     */
    constructor(value) {
        this._pattern = HttpRule.PatternCase.none;
        value = value || {};
        this.selector = value.selector;
        this.get = value.get;
        this.put = value.put;
        this.post = value.post;
        this.delete = value.delete;
        this.patch = value.patch;
        this.custom = value.custom
            ? new CustomHttpPattern(value.custom)
            : undefined;
        this.body = value.body;
        this.responseBody = value.responseBody;
        this.additionalBindings = (value.additionalBindings || []).map(m => new HttpRule(m));
        HttpRule.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        HttpRule.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new HttpRule();
        HttpRule.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.selector = instance.selector || '';
        instance.body = instance.body || '';
        instance.responseBody = instance.responseBody || '';
        instance.additionalBindings = instance.additionalBindings || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.selector = reader.readString();
                    break;
                case 2:
                    instance.get = reader.readString();
                    break;
                case 3:
                    instance.put = reader.readString();
                    break;
                case 4:
                    instance.post = reader.readString();
                    break;
                case 5:
                    instance.delete = reader.readString();
                    break;
                case 6:
                    instance.patch = reader.readString();
                    break;
                case 8:
                    instance.custom = new CustomHttpPattern();
                    reader.readMessage(instance.custom, CustomHttpPattern.fromBinaryReader);
                    break;
                case 7:
                    instance.body = reader.readString();
                    break;
                case 12:
                    instance.responseBody = reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new HttpRule();
                    reader.readMessage(messageInitializer11, HttpRule.fromBinaryReader);
                    (instance.additionalBindings =
                        instance.additionalBindings || []).push(messageInitializer11);
                    break;
                default:
                    reader.skipField();
            }
        }
        HttpRule.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.selector) {
            writer.writeString(1, instance.selector);
        }
        if (instance.get || instance.get === '') {
            writer.writeString(2, instance.get);
        }
        if (instance.put || instance.put === '') {
            writer.writeString(3, instance.put);
        }
        if (instance.post || instance.post === '') {
            writer.writeString(4, instance.post);
        }
        if (instance.delete || instance.delete === '') {
            writer.writeString(5, instance.delete);
        }
        if (instance.patch || instance.patch === '') {
            writer.writeString(6, instance.patch);
        }
        if (instance.custom) {
            writer.writeMessage(8, instance.custom, CustomHttpPattern.toBinaryWriter);
        }
        if (instance.body) {
            writer.writeString(7, instance.body);
        }
        if (instance.responseBody) {
            writer.writeString(12, instance.responseBody);
        }
        if (instance.additionalBindings && instance.additionalBindings.length) {
            writer.writeRepeatedMessage(11, instance.additionalBindings, HttpRule.toBinaryWriter);
        }
    }
    get selector() {
        return this._selector;
    }
    set selector(value) {
        this._selector = value;
    }
    get get() {
        return this._get;
    }
    set get(value) {
        if (value !== undefined && value !== null) {
            this._put = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.get;
        }
        this._get = value;
    }
    get put() {
        return this._put;
    }
    set put(value) {
        if (value !== undefined && value !== null) {
            this._get = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.put;
        }
        this._put = value;
    }
    get post() {
        return this._post;
    }
    set post(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.post;
        }
        this._post = value;
    }
    get delete() {
        return this._delete;
    }
    set delete(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.delete;
        }
        this._delete = value;
    }
    get patch() {
        return this._patch;
    }
    set patch(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.patch;
        }
        this._patch = value;
    }
    get custom() {
        return this._custom;
    }
    set custom(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._patch = undefined;
            this._pattern = HttpRule.PatternCase.custom;
        }
        this._custom = value;
    }
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;
    }
    get responseBody() {
        return this._responseBody;
    }
    set responseBody(value) {
        this._responseBody = value;
    }
    get additionalBindings() {
        return this._additionalBindings;
    }
    set additionalBindings(value) {
        this._additionalBindings = value;
    }
    get pattern() {
        return this._pattern;
    }
    toObject() {
        return {
            selector: this.selector,
            get: this.get,
            put: this.put,
            post: this.post,
            delete: this.delete,
            patch: this.patch,
            custom: this.custom ? this.custom.toObject() : undefined,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (HttpRule) {
    let PatternCase;
    (function (PatternCase) {
        PatternCase[PatternCase["none"] = 0] = "none";
        PatternCase[PatternCase["get"] = 1] = "get";
        PatternCase[PatternCase["put"] = 2] = "put";
        PatternCase[PatternCase["post"] = 3] = "post";
        PatternCase[PatternCase["delete"] = 4] = "delete";
        PatternCase[PatternCase["patch"] = 5] = "patch";
        PatternCase[PatternCase["custom"] = 6] = "custom";
    })(PatternCase = HttpRule.PatternCase || (HttpRule.PatternCase = {}));
})(HttpRule || (HttpRule = {}));
class CustomHttpPattern {
    /**
     * Creates an object and applies default Protobuf values
     * @param CustomHttpPattern value
     */
    constructor(value) {
        value = value || {};
        this.kind = value.kind;
        this.path = value.path;
        CustomHttpPattern.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CustomHttpPattern.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CustomHttpPattern();
        CustomHttpPattern.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.kind = instance.kind || '';
        instance.path = instance.path || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.kind = reader.readString();
                    break;
                case 2:
                    instance.path = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CustomHttpPattern.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.kind) {
            writer.writeString(1, instance.kind);
        }
        if (instance.path) {
            writer.writeString(2, instance.path);
        }
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    toObject() {
        return {
            kind: this.kind,
            path: this.path
        };
    }
    toJSON() {
        return this.toObject();
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { AddSessionLabelsRequest, AddUserToProjectRequest, Agent, AgentOfUserWithOwner, AgentSorting, AgentStatus, AgentView, AgentWithOwner, AgentsClient, AiServicesClient, AltSentence, AltTrainingPhrase, Any, AudioEncoding, BatchCreateEntitiesRequest, BatchDeleteEntitiesRequest, BatchDeleteEntityTypesRequest, BatchDeleteIntentsRequest, BatchUpdateEntitiesRequest, BatchUpdateEntityTypesRequest, BatchUpdateEntityTypesResponse, BatchUpdateIntentsRequest, BatchUpdateIntentsResponse, BertAugEnrichmentConfig, BuildCacheRequest, CancelOperationRequest, Context, ContextsClient, CreateAgentRequest, CreateContextRequest, CreateEntityTypeRequest, CreateIntentRequest, CreateProjectRoleRequest, CreateServerRoleRequest, CreateSessionReviewRequest, CreateUserRequest, CustomHttpPattern, DataEnrichmentConfig, DefaultProjectRole, DefaultServerRole, DeleteAgentRequest, DeleteAllContextsRequest, DeleteContextRequest, DeleteEntityTypeRequest, DeleteIntentRequest, DeleteOperationRequest, DeleteProjectRoleRequest, DeleteResourcesRequest, DeleteServerRoleRequest, DeleteSessionRequest, DeleteUserRequest, DescriptorProto, DetectIntentRequest, DetectIntentResponse, DetectedIntent, Empty, EntityEnrichmentConfig, EntityType, EntityTypeBatch, EntityTypeCategory, EntityTypeSorting, EntityTypeView, EntityTypesClient, EnumDescriptorProto, EnumOptions, EnumValueDescriptorProto, EnumValueOptions, EventInput, ExportAgentRequest, ExportAgentResponse, ExportResourcesRequest, ExportResourcesResponse, ExtensionRangeOptions, ExtractEntitiesRequest, ExtractEntitiesResponse, FastTextEnrichmentConfig, FieldDescriptorProto, FieldMask, FieldOptions, FileDescriptorProto, FileDescriptorSet, FileOptions, GPT2EnrichmentConfig, GRPC_AGENTS_CLIENT_SETTINGS, GRPC_AI_SERVICES_CLIENT_SETTINGS, GRPC_CONTEXTS_CLIENT_SETTINGS, GRPC_ENTITY_TYPES_CLIENT_SETTINGS, GRPC_INTENTS_CLIENT_SETTINGS, GRPC_OPERATIONS_CLIENT_SETTINGS, GRPC_PROJECT_ROLES_CLIENT_SETTINGS, GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS, GRPC_QA_CLIENT_SETTINGS, GRPC_SERVER_STATISTICS_CLIENT_SETTINGS, GRPC_SESSIONS_CLIENT_SETTINGS, GRPC_USERS_CLIENT_SETTINGS, GRPC_WEBHOOK_CLIENT_SETTINGS, GenerateResponsesRequest, GenerateResponsesResponse, GenerateUserSaysRequest, GenerateUserSaysResponse, GeneratedCodeInfo, GetAgentRequest, GetAgentStatisticsRequest, GetAgentStatisticsResponse, GetAlternativeSentencesRequest, GetAlternativeSentencesResponse, GetAlternativeTrainingPhrasesRequest, GetAlternativeTrainingPhrasesResponse, GetAnswerRequest, GetAnswerResponse, GetContextRequest, GetEntityTypeCountRequest, GetEntityTypeRequest, GetIntentCountRequest, GetIntentRequest, GetLatestSessionReviewRequest, GetOperationRequest, GetPlatformInfoResponse, GetProjectElementStatRequest, GetProjectRoleRequest, GetProjectStatRequest, GetServerRoleRequest, GetSessionRequest, GetSessionReviewRequest, GetSynonymsRequest, GetSynonymsResponse, GetUserProjectCountRequest, GetUserRequest, GloVeEnrichmentConfig, Http, HttpRule, ImportAgentRequest, InputAudioConfig, Intent, IntentBatch, IntentCategory, IntentSorting, IntentView, IntentsClient, LatLng, ListAgentsOfUserResponse, ListAgentsRequest, ListAgentsResponse, ListContextsRequest, ListContextsResponse, ListEntityTypesRequest, ListEntityTypesResponse, ListIntentsRequest, ListIntentsResponse, ListOperationsRequest, ListOperationsResponse, ListProjectPermissionsRequest, ListProjectPermissionsResponse, ListProjectRolesRequest, ListProjectRolesResponse, ListServerPermissionsRequest, ListServerPermissionsResponse, ListServerRolesRequest, ListServerRolesResponse, ListSessionLabelsRequest, ListSessionLabelsResponse, ListSessionReviewsRequest, ListSessionReviewsResponse, ListSessionsRequest, ListSessionsResponse, ListUserInfosResponse, ListUsersInProjectRequest, ListUsersInProjectResponse, ListUsersRequest, ListUsersResponse, ListValue, LoginRequest, LoginResponse, MessageOptions, MethodDescriptorProto, MethodOptions, NullValue, OneofDescriptorProto, OneofOptions, Operation, OperationMetadata, OperationsClient, OptimizeRankingMatchRequest, OptimizeRankingMatchResponse, OriginalDetectIntentRequest, PingRequest, PingResponse, ProjectRole, ProjectRoleView, ProjectRolesClient, ProjectStatisticsClient, QAClient, QueryInput, QueryParameters, QueryResult, RankingMatchOptimizationConfig, RemoveSessionLabelsRequest, RemoveUserFromProjectRequest, ReportFormat, ReportType, RestoreAgentRequest, RunScraperResponse, RunTrainingResponse, ServerRole, ServerStatisticsClient, ServiceDescriptorProto, ServiceOptions, Session, SessionFilter, SessionInfo, SessionReview, SessionReviewStep, SessionStep, SessionsClient, SetAgentStatusRequest, SetResourcesRequest, SortingMode, SourceCodeInfo, StatResponse, Status, StreamingDetectIntentRequest, StreamingDetectIntentResponse, StreamingRecognitionResult, Struct, Synonym, TextInput, ThesaurusEnrichmentConfig, Timestamp, TrackSessionStepRequest, TrainAgentRequest, UninterpretedOption, UpdateAgentRequest, UpdateContextRequest, UpdateEntityTypeRequest, UpdateIntentRequest, UpdateProjectRoleRequest, UpdateServerRoleRequest, UpdateUserRequest, User, UserInProject, UserInfo, UsersClient, Value, WebhookClient, WebhookRequest, WebhookResponse, Word2VecEnrichmentConfig, WordNetAugEnrichmentConfig, XLNetAugEnrichmentConfig };
//# sourceMappingURL=ondewo-nlu-client-angular.js.map
