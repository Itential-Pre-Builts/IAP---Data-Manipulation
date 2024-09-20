# Parse Number - IAP

## Table of Contents

- [Parse Number - IAP](#parse-number---iap)
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

Convert strings and strings within objects to numbers

Capabilities include:
- This transformation allows IAP users to convert strings and strings within objects to numbers





## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Parse Number - IAP** has been tested with:


- IAP **2023.2**



### External Dependencies

No external dependencies required to run this Transformation Project.




### Adapters

No adapters required to run **Parse Number - IAP**.


### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-pre-built-iap).

### Testing

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project


### Entry Point IAP Component

The primary IAP component to run **Parse Number - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Parse Number - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Parse Number - IAP**:

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
      <td>keysToConvert</td>
      <td>array</td>
      <td>yes</td>
      <td>The keys to be converted in the object if the data is an object or an array of objects. Set this attribute to [] if not applicable, or if all keys need to be converted</td>
      <td><pre lang="json">[
  "price",
  "aisle"
]</pre></td>
    </tr>    <tr>
      <td>data</td>
      <td>['array', 'number', 'string', 'object']</td>
      <td>yes</td>
      <td>Data that have strings that need to be converted to number. For arrays and objects, the JST will convert strings in the first level only</td>
      <td><pre lang="json">{
  "fruit": "apple",
  "quantity": "30",
  "price": "42.2",
  "aisle": "23b"
}</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs for **Parse Number - IAP**:

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
      <td>['array', 'object', 'number', 'string']</td>
      <td>Parsed data</td>
      <td><pre lang="json">{
  "fruit": "apple",
  "quantity": "30",
  "price": 42.2,
  "aisle": "23b"
}</pre></td>
    </tr>
  </tbody>
</table>



### Query Output

There are no query output examples for **Parse Number - IAP**.




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "keysToConvert": [
    "price",
    "aisle"
  ],
  "data": {
    "fruit": "apple",
    "quantity": "30",
    "price": "42.2",
    "aisle": "23b"
  }
} </pre>

    
    
Output:
<pre>{
  "fruit": "apple",
  "quantity": "30",
  "price": 42.2,
  "aisle": "23b"
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "keysToConvert": [],
  "data": [
    12,
    true,
    "32.23",
    "banana",
    [
      "43"
    ],
    "35"
  ]
} </pre>

    
    
Output:
<pre>[
  12,
  true,
  32.23,
  "banana",
  [
    "43"
  ],
  35
] </pre>

    
  
#### Example 3

    
Input:
<pre>{
  "keysToConvert": [],
  "data": [
    {
      "FILE_SYSTEM": "net/node0_RP0_CPU0/harddisk",
      "TOTAL_SIZE": "17538482176",
      "TOTAL_FREE": "14333425152"
    },
    {
      "FILE_SYSTEM": "net/node0_RP1_CPU0/harddisk",
      "TOTAL_SIZE": "17538482175",
      "TOTAL_FREE": "44222222"
    }
  ]
} </pre>

    
    
Output:
<pre>[
  {
    "FILE_SYSTEM": "net/node0_RP0_CPU0/harddisk",
    "TOTAL_SIZE": 17538482176,
    "TOTAL_FREE": 14333425152
  },
  {
    "FILE_SYSTEM": "net/node0_RP1_CPU0/harddisk",
    "TOTAL_SIZE": 17538482175,
    "TOTAL_FREE": 44222222
  }
] </pre>

    
  


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

Please use your Itential Customer Success account if you need support when using **Parse Number - IAP**.