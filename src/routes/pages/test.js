import React, { Component } from "react";

export default class Test {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log(this.name);
  }
}
