# 📦 HUB-LB-COLLECTION (APPSMITH USE ONLY)

> **A collection of custom modules that is require in commonly used.**

[![npm version](https://img.shields.io/npm/v/hub-lb-collection.svg)](https://www.npmjs.com/package/hub-lb-collection)
[![license](https://img.shields.io/npm/l/package-name.svg)](https://www.npmjs.com/package/hub-lb-collection)
[![downloads](https://img.shields.io/npm/dt/hub-lb-collection.svg)](https://www.npmjs.com/package/hub-lb-collection)

---

## 🚀 Features (currently APPSMITH use only)

- 📅 **Feature 1** – "timestamp" can be used to populate the timestamps in who columns.
- ⚙️ **Feature 2** – "graphQl" added error handling for graphQl queries.

---

## 📦 Installation

Install the package using npm:

```bash
# npm
npm install hub-lb-collection

```

---

## 🔧 Usage

- 📅 **Feature 1 :- Timestamp**

```
const collection = require('hub-lb-collection');

const feature = `timestamp`;
const response = collection(feature);

console.log(response);
```

- 📅 **Feature 2 :- graphQl**

```
const collection = require('hub-lb-collection');

const feature = `graphQl`;
const response = collection(feature, your-query-name, parameters);

console.log(response);
```
