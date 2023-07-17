const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the generated protobuf definition
const packageDefinition = protoLoader.loadSync('./file.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const myService = protoDescriptor.MyService;

// Create a gRPC client
const client = new myService('localhost:50051', grpc.credentials.createInsecure());

// Make a gRPC call
const request = { name: 'John' };
client.myMethod(request, (error: Error | null, response: any) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Response:', response.message);
});

