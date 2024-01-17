# Transpose Record by Creating Arrays for Each Property Within Groups - IAP

## Table of Contents

- [Transpose Record by Creating Arrays for Each Property Within Groups - IAP](#transpose-record-by-creating-arrays-for-each-property-within-groups---iap)
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

Transpose the record by creating arrays for each property within the groups

Capabilities include:
- This transformation allows IAP users to transpose the record by creating arrays for each property within the groups


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Transpose Record by Creating Arrays for Each Property Within Groups - IAP** has been tested with:


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
      <td>Transpose Record by Creating Arrays for Each Property Within Groups - IAP</td>
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
      <td>An array of objects</td>
      <td><pre lang="json">[
  {
    "item": "apple",
    "price": "42.2",
    "type": "fruit"
  },
  {
    "item": "banana",
    "price": "10.1",
    "type": "fruit"
  },
  {
    "item": "potato",
    "price": "20",
    "type": "vegetable"
  }
]</pre></td>
    </tr>    <tr>
      <td>groupByProperty</td>
      <td>string</td>
      <td>yes</td>
      <td>A property by which to group the input array</td>
      <td><pre lang="json">type</pre></td>
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
      <td>output</td>
      <td>object</td>
      <td>An object containing a list of objects organized by the groupByProperty value. Each property within the groups is transformed into an array</td>
      <td><pre lang="json">{
  "fruit": {
    "item": [
      "apple",
      "banana"
    ],
    "price": [
      "42.2",
      "10.1"
    ]
  },
  "vegetable": {
    "item": [
      "potato"
    ],
    "price": [
      "20"
    ]
  }
}</pre></td>
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
      "item": "apple",
      "price": "42.2",
      "type": "fruit"
    },
    {
      "item": "banana",
      "price": "10.1",
      "type": "fruit"
    },
    {
      "item": "potato",
      "price": "20",
      "type": "vegetable"
    }
  ],
  "groupByProperty": "type"
} </pre>

    
    
Output:
<pre>{
  "fruit": {
    "item": [
      "apple",
      "banana"
    ],
    "price": [
      "42.2",
      "10.1"
    ]
  },
  "vegetable": {
    "item": [
      "potato"
    ],
    "price": [
      "20"
    ]
  }
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "array": [
    {
      "number": 43,
      "president": "George W. Bush",
      "took_office": "2001-01-20",
      "left_office": "2009-01-20",
      "party": "Republican"
    },
    {
      "number": 44,
      "president": "Barack Obama",
      "took_office": "2009-01-20",
      "left_office": "2017-01-20",
      "party": "Democratic"
    },
    {
      "number": 45,
      "president": "Donald J. Trump",
      "took_office": "2017-01-20",
      "left_office": null,
      "party": "Republican"
    },
    {
      "number": 47,
      "president": "Joe Biden",
      "took_office": "2021-01-20",
      "left_office": null
    }
  ],
  "groupByProperty": "party"
} </pre>

    
    
Output:
<pre>{
  "Republican": {
    "number": [
      43,
      45
    ],
    "president": [
      "George W. Bush",
      "Donald J. Trump"
    ],
    "took_office": [
      "2001-01-20",
      "2017-01-20"
    ],
    "left_office": [
      "2009-01-20",
      null
    ]
  },
  "Democratic": {
    "number": [
      44
    ],
    "president": [
      "Barack Obama"
    ],
    "took_office": [
      "2009-01-20"
    ],
    "left_office": [
      "2017-01-20"
    ]
  },
  "undefined": {
    "number": [
      47
    ],
    "president": [
      "Joe Biden"
    ],
    "took_office": [
      "2021-01-20"
    ],
    "left_office": [
      null
    ]
  }
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.