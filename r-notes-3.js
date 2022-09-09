/*************************************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 3, React Sandbox, small project to examine useRef, useCallback, useMemo, custom hooks
*************************************************************************************************/

// useRef hook:

//allows you to create a reference to a DOM element, or you can create a reference to something that doesn't have to be a specific DOM element
    
    //use case #1 allows you to create reference to DOM element and set or get values for that DOM element, see UseRefExample1.jsx
    import { useRef } from 'react'
    const inputRef = useRef()
    <input
    type="text"
    id="name"
    className="form-control mb-2"
    ref={inputRef}
    />
    // if you set a value with useRef hook it does not rerender the component like useState hook does

    //use case #2 allows you to get previous state after a component has changed state, see useRefExample2.jsx

    //use case #3, memory leak error fix, component unmounts before response from fetch call is complete, see UseRefExample3.jsx and Todo.jsx
    // memory leak error warning does not show in React v.18 but problem is still there, note from React team...
    // This warning was added for subscriptions, but people primarily run into it in scenarios where setting state is fine, and workarounds make the code worse. We've removed this warning.

// useMemo hook:
    //not used a lot, use only if you are experiencing performance issues, because there can be consequences if overused, and a lot of times it's unneccasary
    //memoization: optimization technique that speeds up performance by caching the result of an expensive function call when it has the same arguments
    //memoizes a return value 
    import { useMemo } from 'react'
    const sqrt = useMemo(() => getSqrt(number), [number]) //  the return value of getSqrt is memoized(cached) and callback function does not run unless number value changes in array of dependencies

// useCallback hook:
    //not used a lot, use only if you are experiencing performance issues, because there can be consequences if overused, and a lot of times it's unneccasary
    //memoization: optimization technique that speeds up performance by caching the result of an expensive function call when it has the same arguments
    // memoizes a callback function
    //in our example, UseCallbackExample.jsx the button component and addTask function is memoized so that it is still being called without having to rerender the button component


// CUSTOM HOOKS
// naming convention is to prepend with 'use', ex: useFetch.js, custom hooks are placed in hooks folder in src folder
// there are a lot of useful custom hooks created by people on Internet, we will create two common ones

// #1: custom fetch hook, see useFetch.js and CustomHookExample1.jsx
// #2: sets local storage, see useLocalStorage and CustomHookExample2.jsx