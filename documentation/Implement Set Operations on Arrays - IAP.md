# Implement Set Operations on Arrays - IAP

## Table of Contents

- [Implement Set Operations on Arrays - IAP](#implement-set-operations-on-arrays---iap)
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

Implement set operations on 2 arrays

Capabilities include:
- This transformation allows IAP users to implement set operations on 2 arrays including union, intersection, set difference and symmetric difference


## Getting Started

### Supported IAP Versions

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **Implement Set Operations on Arrays - IAP** has been tested with:


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
      <td>Implement Set Operations on Arrays - IAP</td>
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
      <td>array1</td>
      <td>array</td>
      <td>yes</td>
      <td>The first array which can contain elements of type arrays, numbers, integers, strings, or objects</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    3,
    4
  ],
  [
    1,
    2
  ],
  "apple"
]</pre></td>
    </tr>    <tr>
      <td>array2</td>
      <td>array</td>
      <td>yes</td>
      <td>The second array which can contain elements of type arrays, numbers, integers, strings, or objects</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    3,
    5
  ],
  "apple",
  99
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
      <td>intersection</td>
      <td>array</td>
      <td>Array containing elements common to both arrays</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  "apple"
]</pre></td>
    </tr>    <tr>
      <td>array1Only</td>
      <td>array</td>
      <td>Array containing elements in "array1" but not in "array2"</td>
      <td><pre lang="json">[
  [
    1,
    2
  ]
]</pre></td>
    </tr>    <tr>
      <td>array2Only</td>
      <td>array</td>
      <td>Array containing elements in "array2" but not in "array1"</td>
      <td><pre lang="json">[
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>    <tr>
      <td>difference</td>
      <td>array</td>
      <td>Array containing elements that are present in either "array1" or "array2", but not in both</td>
      <td><pre lang="json">[
  [
    1,
    2
  ],
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>    <tr>
      <td>union</td>
      <td>array</td>
      <td>Array containing all unique elements from both arrays</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    2
  ],
  "apple",
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>
  </tbody>
</table>

  


### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information (i) icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 
 


### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "array1": [
    [
      1,
      3,
      4
    ],
    [
      1,
      3,
      4
    ],
    [
      1,
      2
    ],
    "apple"
  ],
  "array2": [
    [
      1,
      3,
      4
    ],
    [
      1,
      3,
      5
    ],
    "apple",
    99
  ]
} </pre>

    
    
Output:
<pre>{
  "intersection": [
    [
      1,
      3,
      4
    ],
    "apple"
  ],
  "array1Only": [
    [
      1,
      2
    ]
  ],
  "array2Only": [
    [
      1,
      3,
      5
    ],
    99
  ],
  "difference": [
    [
      1,
      2
    ],
    [
      1,
      3,
      5
    ],
    99
  ],
  "union": [
    [
      1,
      3,
      4
    ],
    [
      1,
      2
    ],
    "apple",
    [
      1,
      3,
      5
    ],
    99
  ]
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "array1": [
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
      "city": "Silver Spring",
      "state": "MD"
    }
  ],
  "array2": [
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
  "intersection": [
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
    }
  ],
  "array1Only": [
    {
      "city": "Silver Spring",
      "state": "MD"
    }
  ],
  "array2Only": [
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "difference": [
    {
      "city": "Silver Spring",
      "state": "MD"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "union": [
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
      "city": "Silver Spring",
      "state": "MD"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Transformation Project.