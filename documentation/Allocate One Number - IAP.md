# Allocate One Number - IAP

## Table of Contents

- [Allocate One Number - IAP](#allocate-one-number---iap)
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

Find the first available number from an array of already allocated integers given a starting integer and an ending integer

Capabilities include:
- This transformation allows IAP users to find the first available number from an array of already allocated integers given a starting integer and an ending integer





## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Allocate One Number - IAP** has been tested with:


- IAP **2023.2**



### External Dependencies

No external dependencies required to run this Transformation Project.




### Adapters

No adapters required to run **Allocate One Number - IAP**.


### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-pre-built-iap).

### Testing

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project


### Entry Point IAP Component

The primary IAP component to run **Allocate One Number - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Allocate One Number - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Allocate One Number - IAP**:

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
      <td>allocated</td>
      <td>array</td>
      <td>yes</td>
      <td>Array of already allocated integers</td>
      <td><pre lang="json">[
  1,
  4,
  5
]</pre></td>
    </tr>    <tr>
      <td>startRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Lower bound (inclusive) for the range between which a number is allocated</td>
      <td><pre lang="json">5</pre></td>
    </tr>    <tr>
      <td>endRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Upper bound (exclusive) for the range between which a number is allocated</td>
      <td><pre lang="json">8</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs for **Allocate One Number - IAP**:

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
      <td>assigned</td>
      <td>['integer', 'boolean']</td>
      <td>The first available number if found. Otherwise, it will be false</td>
      <td><pre lang="json">6</pre></td>
    </tr>
  </tbody>
</table>



### Query Output

There are no query output examples for **Allocate One Number - IAP**.




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "allocated": [
    1,
    4,
    5
  ],
  "startRange": 5,
  "endRange": 8
} </pre>

    
    
Output:
<pre>{
  "assigned": 6
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "allocated": [
    1
  ],
  "startRange": 2,
  "endRange": 2
} </pre>

    
    
Output:
<pre>{
  "assigned": false
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

Please use your Itential Customer Success account if you need support when using **Allocate One Number - IAP**.