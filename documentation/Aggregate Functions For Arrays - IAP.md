# Aggregate Functions For Arrays - IAP

## Table of Contents

- [Aggregate Functions For Arrays - IAP](#aggregate-functions-for-arrays---iap)
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

This transformation allows IAP users to to run a set of mathematical aggregate functions on an array of numbers

Capabilities include:
- The transformation allows IAP users to to run a set of mathematical aggregate functions on an array of numbers. The aggregate functions consist of Sum, Product, Maximum, Minimum, Range, Count, Arithmetic Mean, Geometric Mean, Harmonic Mean, Median, Mode, Standard Deviation, and Variance


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Aggregate Functions For Arrays - IAP** has been tested with:


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
      <td>groupedArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of numbers</td>
      <td><pre lang="json">[
  1,
  2,
  3
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
      <td>sum</td>
      <td>number</td>
      <td>Summation of the items in the array</td>
      <td><pre lang="json">6</pre></td>
    </tr>    <tr>
      <td>product</td>
      <td>number</td>
      <td>Product of the items in the array</td>
      <td><pre lang="json">6</pre></td>
    </tr>    <tr>
      <td>maximum</td>
      <td>number</td>
      <td>The highest value in the array</td>
      <td><pre lang="json">3</pre></td>
    </tr>    <tr>
      <td>minumum</td>
      <td>number</td>
      <td>The lowest value in the array</td>
      <td><pre lang="json">1</pre></td>
    </tr>    <tr>
      <td>range</td>
      <td>number</td>
      <td>Difference between the lowest and highest values</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>count</td>
      <td>number</td>
      <td>Number of items used for the calculations</td>
      <td><pre lang="json">3</pre></td>
    </tr>    <tr>
      <td>arithmeticMean</td>
      <td>number</td>
      <td>The sum of all the numbers in the array divided by the count of all numbers in the array</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>geometricMean</td>
      <td>number</td>
      <td>The average value which signifies the central tendency of the numbers in the arrays by taking the root of the product of their values</td>
      <td><pre lang="json">1.8171205928321397</pre></td>
    </tr>    <tr>
      <td>harmonicMean</td>
      <td>number</td>
      <td>The reciprocal of the average of the reciprocals</td>
      <td><pre lang="json">1.6363636363636365</pre></td>
    </tr>    <tr>
      <td>median</td>
      <td>number</td>
      <td>Middle value of the items in the array</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>mode</td>
      <td>array</td>
      <td>The numbers that appear most often in the array</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>    <tr>
      <td>modeFrequency</td>
      <td>number</td>
      <td>The number of times the most frequently occurring numbers appear</td>
      <td><pre lang="json">1</pre></td>
    </tr>    <tr>
      <td>standardDeviation</td>
      <td>number</td>
      <td>Measure of the amount of variation or dispersion of the items in the array</td>
      <td><pre lang="json">0.82915619758885</pre></td>
    </tr>    <tr>
      <td>variance</td>
      <td>number</td>
      <td>Measure of how far the array items are spread out from the arithmetic mean</td>
      <td><pre lang="json">0.6875</pre></td>
    </tr>    <tr>
      <td>valuesIgnored</td>
      <td>array</td>
      <td>Items of the array that were either not a number or a parsable string and were ignored from all calculations</td>
      <td><pre lang="json">[]</pre></td>
    </tr>    <tr>
      <td>valuesUsed</td>
      <td>array</td>
      <td>Items of the array that were either a number or a parsable string and were used for all calculations</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>    <tr>
      <td>valuesUsed-converted</td>
      <td>array</td>
      <td>The parsed form of all items in valuesUsed</td>
      <td><pre lang="json">[
  1,
  2,
  3
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