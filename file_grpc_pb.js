// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_pb = require('./file_pb.js');

function serialize_RequestMessage(arg) {
  if (!(arg instanceof file_pb.RequestMessage)) {
    throw new Error('Expected argument of type RequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RequestMessage(buffer_arg) {
  return file_pb.RequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ResponseMessage(arg) {
  if (!(arg instanceof file_pb.ResponseMessage)) {
    throw new Error('Expected argument of type ResponseMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ResponseMessage(buffer_arg) {
  return file_pb.ResponseMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var MyServiceService = exports.MyServiceService = {
  myMethod: {
    path: '/MyService/MyMethod',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.RequestMessage,
    responseType: file_pb.ResponseMessage,
    requestSerialize: serialize_RequestMessage,
    requestDeserialize: deserialize_RequestMessage,
    responseSerialize: serialize_ResponseMessage,
    responseDeserialize: deserialize_ResponseMessage,
  },
};

exports.MyServiceClient = grpc.makeGenericClientConstructor(MyServiceService);
