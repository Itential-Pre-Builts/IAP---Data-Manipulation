# Chunk Array - IAP

## Table of Contents

- [Chunk Array - IAP](#chunk-array---iap)
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

Split an array into a smaller sized groups given a desired chunk size

Capabilities include:
- This transformation allows IAP users to split an array into a smaller sized groups given a desired chunk size


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Chunk Array - IAP** has been tested with:


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
      <td>Chunk Array - IAP</td>
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
      <td>originalArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array that needs to be splitted in chunks</td>
      <td><pre lang="json">[
  1,
  2,
  3,
  "a",
  "b"
]</pre></td>
    </tr>    <tr>
      <td>chunkSize</td>
      <td>number</td>
      <td>yes</td>
      <td>The size of each chunk when splitting an array</td>
      <td><pre lang="json">3</pre></td>
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
      <td>splitArray</td>
      <td>array</td>
      <td>The array that has been splitted in chunks</td>
      <td><pre lang="json">[
  [
    1,
    2,
    3
  ],
  [
    "a",
    "b"
  ]
]</pre></td>
    </tr>
  </tbody>
</table>

  


### API Links


- [Mozilla Developer Network JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "originalArray": [
    1,
    2,
    3,
    "a",
    "b"
  ],
  "chunkSize": 3
} </pre>

    
    
Output:
<pre>[
  [
    1,
    2,
    3
  ],
  [
    "a",
    "b"
  ]
] </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.