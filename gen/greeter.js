/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "some.protos.greeter.v1beta1";
function createBaseSayHelloRequest() {
    return { name: "" };
}
export const SayHelloRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSayHelloRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSayHelloRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseSayHelloResponse() {
    return { message: "" };
}
export const SayHelloResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSayHelloResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSayHelloResponse();
        message.message = object.message ?? "";
        return message;
    },
};
/** The greeting service definition. */
export const GreeterServiceDefinition = {
    name: "GreeterService",
    fullName: "some.protos.greeter.v1beta1.GreeterService",
    methods: {
        /** Sends a greeting */
        sayHello: {
            name: "SayHello",
            requestType: SayHelloRequest,
            requestStream: false,
            responseType: SayHelloResponse,
            responseStream: false,
            options: {},
        },
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
