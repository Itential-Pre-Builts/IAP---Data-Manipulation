# Filter Array of Objects by Key Value Pair - IAP

## Table of Contents

- [Filter Array of Objects by Key Value Pair - IAP](#filter-array-of-objects-by-key-value-pair---iap)
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

Filter array of objects by key value pair

Capabilities include:
- This transformation allows IAP users to filter an array of objects by providing a key and a value to match on, and the option to discard the matching items from the array





## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Filter Array of Objects by Key Value Pair - IAP** has been tested with:


- IAP **2023.2**



### External Dependencies

No external dependencies required to run this Transformation Project.




### Adapters

No adapters required to run **Filter Array of Objects by Key Value Pair - IAP**.


### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-pre-built-iap).

### Testing

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project


### Entry Point IAP Component

The primary IAP component to run **Filter Array of Objects by Key Value Pair - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Filter Array of Objects by Key Value Pair - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Filter Array of Objects by Key Value Pair - IAP**:

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
      <td>filterableArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects</td>
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
      <td>keyToFilterOn</td>
      <td>string</td>
      <td>yes</td>
      <td>Key to match on</td>
      <td><pre lang="json">state</pre></td>
    </tr>    <tr>
      <td>valueToFind</td>
      <td>['string', 'number', 'boolean', 'array', 'object', 'null']</td>
      <td>yes</td>
      <td>Value of the key to match on</td>
      <td><pre lang="json">GA</pre></td>
    </tr>    <tr>
      <td>discardMatching</td>
      <td>boolean</td>
      <td>yes</td>
      <td>Whether to remove matching items from the array or not</td>
      <td><pre lang="json">true</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs for **Filter Array of Objects by Key Value Pair - IAP**:

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
      <td>filteredArray</td>
      <td>array</td>
      <td>Either an array of matching items if discardMatching is set to false, or an array of unmatching items if discardMatching is set to true</td>
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
    </tr>    <tr>
      <td>firstFilteredElement</td>
      <td>object</td>
      <td>First item in the filtered array</td>
      <td><pre lang="json">{
  "city": "Dallas",
  "state": "TX"
}</pre></td>
    </tr>
  </tbody>
</table>



### Query Output

There are no query output examples for **Filter Array of Objects by Key Value Pair - IAP**.




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "filterableArray": [
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
  "keyToFilterOn": "state",
  "valueToFind": "GA",
  "discardMatching": true
} </pre>

    
    
Output:
<pre>{
  "filteredArray": [
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "firstFilteredElement": {
    "city": "Dallas",
    "state": "TX"
  }
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "filterableArray": [
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
  "keyToFilterOn": "state",
  "valueToFind": "GA",
  "discardMatching": false
} </pre>

    
    
Output:
<pre>{
  "filteredArray": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    }
  ],
  "firstFilteredElement": {
    "city": "Atlanta",
    "state": "GA"
  }
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

Please use your Itential Customer Success account if you need support when using **Filter Array of Objects by Key Value Pair - IAP**.