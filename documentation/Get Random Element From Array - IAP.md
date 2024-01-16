# Get Random Element From Array - IAP

## Table of Contents

- [Get Random Element From Array - IAP](#get-random-element-from-array---iap)
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

Get a random element from array

Capabilities include:
- This transformation allows IAP users to get a random element from an array


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Get Random Element From Array - IAP** has been tested with:


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
      <td>Get Random Element From Array - IAP</td>
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
      <td>Array from which a random element has to be selected</td>
      <td><pre lang="json">[
  {"city":"Atlanta", "state":"GA"},
  {"city":"Sandy Springs", "state":"GA"},
  {"city":"Dallas", "state":"TX"},
  {"city":"Orlando", "state":"FL"}
]</pre></td>
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
      <td>arrayWithoutElement</td>
      <td>array</td>
      <td>Array without the randomly selected element</td>
      <td><pre lang="json">[
  {
    "city": "Sandy Springs",
    "state": "GA"
  },
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>    <tr>
      <td>randomElement</td>
      <td>number, string, boolean, array, object</td>
      <td>Randomly selected element</td>
      <td><pre lang="json">{
  "city": "Atlanta",
  "state": "GA"
}</pre></td>
    </tr>    <tr>
      <td>randomElementIndex</td>
      <td>integer</td>
      <td>Randomly selected element</td>
      <td><pre lang="json">{
  "city": "Atlanta",
  "state": "GA"
}</pre></td>
    </tr>    <tr>
      <td>poppedArrayLength</td>
      <td>integer</td>
      <td>Length of the array without the randomly selected element</td>
      <td><pre lang="json">3</pre></td>
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
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
    
Output:
<pre>{
  "arrayWithoutElement": [
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "randomElement": {
    "city": "Atlanta",
    "state": "GA"
  },
  "randomElementIndex": 0,
  "poppedArrayLength": 3
} </pre>



## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.