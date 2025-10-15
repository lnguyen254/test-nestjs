## Description

- NestJS + MongoDB (mongoose)
- Setup save to formats in Webstorm (Settings -> Tools -> Actions on Save)
    - Reformat code
    - Optimize imports
    - Run prettier
- Set up global pipe and interceptor (main.ts)
- Error in class-validator (<ERROR_CODE>:<message>)
- Set up a common ResponseDto (both success and error)
- Provide a list of error codes for common
- Structure to create a NestJS module (Module, Repository (Repository and RepositoryImpl), Service, Controller)
- Setting up a DTO should be added Exclude() for class and Expose for each attribute as needed.
- More files to be supported (schema, dto, interface)
- Create simple modules (UserModule and AuthModule)
- Create a static class for utils functions (hashing, jwt, etc) --> src/common/utils
- Use bcrypt for password hashing
- Use class-transformer for DTO transformation
- Use jwt for authentication [here](https://docs.nestjs.com/security/authentication#jwt-token)
- Use guard for route
  protection [here](https://docs.nestjs.com/security/authentication#implementing-the-authentication-guard)
    - Design an automatic private route guard and create a new @Public() decorator to bypass
      it [post](https://docs.nestjs.com/security/authentication#enable-authentication-globally)
- Custom types for better type safety (expand interfaces as needed) --> src/types && tsconfig.json
- Use ua-parser-js to parse user-agent for logging (auth service)