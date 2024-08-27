// app/types/custom.d.ts

declare module 'three' {
    // Here we define the types for the 'three' module.
    // You can import and use the types as needed in your project.
  
    // Import only the types you need to avoid importing unnecessary parts.
    // For example:
    export type Vector2 = import('three').Vector2;
    export type Vector3 = import('three').Vector3;
    export type Mesh = import('three').Mesh;
    export type Material = import('three').Material;
    export type PlaneGeometry = import('three').PlaneGeometry;
    export type ShaderMaterial = import('three').ShaderMaterial;
  
    // You can also declare any other modules or types you need.
    // If you need more comprehensive types, consider installing @types/three
  }
  