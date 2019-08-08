import Vue from 'vue'

import { Component } from 'vue-property-decorator'

import './default.css'

@Component
export default class DefaultLayout extends Vue {
  render() {
    return (
      <div>
        <nuxt />
      </div>
    )
  }
}
