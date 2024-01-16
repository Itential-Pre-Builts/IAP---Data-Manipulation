# Convert CSV to JSON - IAP

## Table of Contents

- [Convert CSV to JSON - IAP](#convert-csv-to-json---iap)
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

Convert CSV to JSON

Capabilities include:
- This transformation allows IAP users to convert a CSV into a JSON


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Convert CSV to JSON - IAP** has been tested with:


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
      <td>Convert CSV to JSON - IAP</td>
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
      <td>csv</td>
      <td>string</td>
      <td>yes</td>
      <td>CSV to convert to JSON</td>
      <td><pre lang="json">a,b,c,d,e,f\n1,2,3,4,5,7,8,9,0\n5,4,3,2,1\n1,2,3,4,5</pre></td>
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
      <td>json</td>
      <td>array</td>
      <td>JSON format of the CSV</td>
      <td><pre lang="json">[
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "7"
  },
  {
    "a": "5",
    "b": "4",
    "c": "3",
    "d": "2",
    "e": "1",
    "f": ""
  },
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": ""
  }
]</pre></td>
    </tr>
  </tbody>
</table>

  


### Related Documentation

No related documentation provided.



### Example Inputs and Outputs

#### Example 1

    
Input:
<pre>{
  "csv": "a,b,c,d,e,f\n1,2,3,4,5,7,8,9,0\n5,4,3,2,1\n1,2,3,4,5"
} </pre>

    
    
Output:
<pre>[
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "7"
  },
  {
    "a": "5",
    "b": "4",
    "c": "3",
    "d": "2",
    "e": "1",
    "f": ""
  },
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": ""
  }
] </pre>



## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.