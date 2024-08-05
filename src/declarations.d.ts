// src/declarations.d.ts
declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

// 다른 이미지 확장자에 대해서도 필요하면 추가
