# Allocate A Pair Of Numbers - IAP

## Table of Contents

- [Allocate A Pair Of Numbers - IAP](#allocate-a-pair-of-numbers---iap)
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

This transformation allows IAP users to find the first available consecutive pair of numbers from an array of already allocated integers given a starting integer and a given ending integer

Capabilities include:
- This transformation allows IAP users to find the first available consecutive pair of numbers from an array of already allocated integers given a starting integer and a given ending integer


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Allocate A Pair Of Numbers - IAP** has been tested with:


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
      <td>aggregateFunctions</td>
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
      <td>number</td>
      <td>yes</td>
      <td>A given starting integer</td>
      <td><pre lang="json">5</pre></td>
    </tr>    <tr>
      <td>endRange</td>
      <td>number</td>
      <td>yes</td>
      <td>A given ending integer</td>
      <td><pre lang="json">8</pre></td>
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
      <td>Has assigned property which contains the consecutive pair or a boolean value</td>
      <td><pre lang="json">[
  6,
  7
]</pre></td>
    </tr>
  </tbody>
</table>

  


### Related Documentation

No related documentation provided.



### Example Inputs and Outputs

No example inputs or outputs found.



## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.