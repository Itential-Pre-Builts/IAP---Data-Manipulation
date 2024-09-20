# Separate Array of Objects by Key Value Pair - IAP

## Table of Contents

- [Separate Array of Objects by Key Value Pair - IAP](#separate-array-of-objects-by-key-value-pair---iap)
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
    - [Query Output](#query-output)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
    - [API Links](#api-links)
  - [Support](#support)

## Overview

Separate an array of objects by a key value pair

Capabilities include:
- This transformation allows IAP users to separate an array of objects into an array of matching items and an array of non-matching items by providing a key and value that needs to be matched





## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Separate Array of Objects by Key Value Pair - IAP** has been tested with:


- IAP **2023.2**



### External Dependencies

No external dependencies required to run this Transformation Project.




### Adapters

No adapters required to run **Separate Array of Objects by Key Value Pair - IAP**.


### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-pre-built-iap).

### Testing

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project


### Entry Point IAP Component

The primary IAP component to run **Separate Array of Objects by Key Value Pair - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Separate Array of Objects by Key Value Pair - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Separate Array of Objects by Key Value Pair - IAP**:

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
      <td>dataArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects that needs separation</td>
      <td><pre lang="json">[
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
]</pre></td>
    </tr>    <tr>
      <td>key</td>
      <td>string</td>
      <td>yes</td>
      <td>The property that needs to be matched</td>
      <td><pre lang="json">state</pre></td>
    </tr>    <tr>
      <td>value</td>
      <td>['array', 'boolean', 'null', 'object', 'number', 'string']</td>
      <td>yes</td>
      <td>The value of the property that needs to be matched</td>
      <td><pre lang="json">GA</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs for **Separate Array of Objects by Key Value Pair - IAP**:

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
      <td>matchingItems</td>
      <td>array</td>
      <td>Array of the matching objects</td>
      <td><pre lang="json">[
  {
    "city": "Atlanta",
    "state": "GA"
  },
  {
    "city": "Sandy Springs",
    "state": "GA"
  }
]</pre></td>
    </tr>    <tr>
      <td>nonmatchingItems</td>
      <td>array</td>
      <td>Array of the non-matching objects</td>
      <td><pre lang="json">[
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>
  </tbody>
</table>



### Query Output

There are no query output examples for **Separate Array of Objects by Key Value Pair - IAP**.




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "dataArray": [
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
  ],
  "key": "state",
  "value": "GA"
} </pre>

    
    
Output:
<pre>{
  "matchingItems": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    }
  ],
  "nonmatchingItems": [
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

    
  
#### Example 2

    
Input:
<pre>{
  "dataArray": [
    {
      "store": "Costco",
      "item": "orange"
    },
    {
      "store": "Costco",
      "item": "milk"
    },
    {
      "store": "Kroger",
      "item": "yam"
    },
    {
      "store": "CVS",
      "item": "batteries"
    }
  ],
  "key": "store",
  "value": "Walmart"
} </pre>

    
    
Output:
<pre>{
  "matchingItems": [],
  "nonmatchingItems": [
    {
      "store": "Costco",
      "item": "orange"
    },
    {
      "store": "Costco",
      "item": "milk"
    },
    {
      "store": "Kroger",
      "item": "yam"
    },
    {
      "store": "CVS",
      "item": "batteries"
    }
  ]
} </pre>

    
  


### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


## Support

Please use your Itential Customer Success account if you need support when using **Separate Array of Objects by Key Value Pair - IAP**.