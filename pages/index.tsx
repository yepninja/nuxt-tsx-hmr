import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Logo from '~/components/Logo'

import './index.css'

@Component
export default class IndexPage extends Vue {
  render() {
    return (
      <div class="container">
        <div>
          <Logo />
          <h1 class="title">
            nuxt-tsx-hmr
          </h1>
          <h2 class="subtitle">
            My splendiferous Nuxt.js project
          </h2>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green"
            >
              Documentation
            </a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    )
  }
}
