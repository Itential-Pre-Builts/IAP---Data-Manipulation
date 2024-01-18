# Remove Element From Array by Index - IAP

## Table of Contents

- [Remove Element From Array by Index - IAP](#remove-element-from-array-by-index---iap)
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
    - [API Links](#api-links)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

Remove an element from an array by index

Capabilities include:
- This transformation allows IAP users to remove an element from an array by index


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Remove Element From Array by Index - IAP** has been tested with:


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
      <td>Remove Element From Array by Index - IAP</td>
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
      <td>Array that has element to be removed</td>
      <td><pre lang="json">[
  9,
  8,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>index</td>
      <td>integer</td>
      <td>yes</td>
      <td>Index of the element to be removed</td>
      <td><pre lang="json">1</pre></td>
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
      <td>Modified array after removing an element at the specified index</td>
      <td><pre lang="json">[
  9,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>item</td>
      <td>['array', 'boolean', 'number', 'string', 'object', 'null']</td>
      <td>The item that was removed from the array</td>
      <td><pre lang="json">8</pre></td>
    </tr>
  </tbody>
</table>

  


### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information (i) icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 
 


### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "array": [
    9,
    8,
    7.45,
    77,
    7
  ],
  "index": 1
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    7.45,
    77,
    7
  ],
  "item": 8
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "array": [
    {
      "a": "a"
    },
    {
      "b": "b"
    },
    {
      "c": "a"
    },
    {
      "d": {
        "e": [
          1,
          2
        ]
      }
    },
    {
      "f": {
        "g": [
          1,
          2,
          3
        ]
      }
    }
  ],
  "index": 4
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    {
      "a": "a"
    },
    {
      "b": "b"
    },
    {
      "c": "a"
    },
    {
      "d": {
        "e": [
          1,
          2
        ]
      }
    }
  ],
  "item": {
    "f": {
      "g": [
        1,
        2,
        3
      ]
    }
  }
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.