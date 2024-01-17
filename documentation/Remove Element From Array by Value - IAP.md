# Remove Element From Array by Value - IAP

## Table of Contents

- [Remove Element From Array by Value - IAP](#remove-element-from-array-by-value---iap)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Supported IAP Versions](#supported-iap-versions)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Transformation Project](#using-this-transformation-project)
    - [Entry Point IAP Component](#entry-point-iap-component)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
    - [Related Documentation](#related-documentation)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

Remove an element from an array by a value

Capabilities include:
- This transformation allows IAP users to remove an element from an array based on a certain value


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Remove Element From Array by Value - IAP** has been tested with:


- IAP **2023.1**



### External Dependencies

No external dependencies required to run this Transformation Project.




### Adapters

No adapters required to run this Transformation Project.


### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4).

### Testing

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project


### Entry Point IAP Component

The primary IAP component to run this Transformation Project is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Remove Element From Array by Value - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs to the Transformation Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>Array consisting of numbers, strings, booleans or null</td>
      <td><pre lang="json">[
  7,
  9,
  8,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>value</td>
      <td>['number', 'string', 'null', 'boolean']</td>
      <td>yes</td>
      <td>The value to be removed from the array</td>
      <td><pre lang="json">7</pre></td>
    </tr>    <tr>
      <td>removeAll</td>
      <td>boolean</td>
      <td>yes</td>
      <td>Whether to remove only the first occurrence of the value or all the occurrences. A 'true' value results in the removal of all the occurrences of the value whereas a 'false' value results in the removal of that value at the first found index</td>
      <td><pre lang="json">true</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs of the Transformation Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>newArray</td>
      <td>array</td>
      <td>Modified array after removing elements</td>
      <td><pre lang="json">[
  9,
  8,
  7.45,
  77
]</pre></td>
    </tr>    <tr>
      <td>noOfRemovedItems</td>
      <td>boolean</td>
      <td>The number of the items that have been removed</td>
      <td><pre lang="json">2</pre></td>
    </tr>
  </tbody>
</table>

  


### Related Documentation

No related documentation provided.



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    7.45,
    77,
    7
  ],
  "value": 7,
  "removeAll": true
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    8,
    7.45,
    77
  ],
  "noOfRemovedItems": 2
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    7.45,
    77,
    7
  ],
  "value": 7,
  "removeAll": false
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    8,
    7.45,
    77,
    7
  ],
  "noOfRemovedItems": 1
} </pre>

    
  
#### Example 3

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    "hi"
  ],
  "value": "hello",
  "removeAll": false
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    7,
    9,
    8,
    "hi"
  ],
  "noOfRemovedItems": 0
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.