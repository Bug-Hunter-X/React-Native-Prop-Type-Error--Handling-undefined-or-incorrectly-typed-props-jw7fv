# React Native Prop Type Error: Handling undefined or incorrectly typed props

This repository demonstrates a common error in React Native applications: prop type errors caused by undefined or incorrectly typed props.  The `BuggyComponent.js` file shows the problematic code, while `FixedComponent.js` provides a solution.

## Problem

When a component expects a prop of a specific type (e.g., string, number, object), and that prop is either missing or of an incorrect type, React Native will throw an error.  This often leads to crashes or unexpected behavior.

## Solution

The best way to solve this is to implement robust prop type validation using PropTypes (if using older React versions) or TypeScript (recommended for newer projects).  Additionally, always check for the existence of the prop before accessing it, using optional chaining or default values. 

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`. 