import App from 'src/App.svelte'

const spaRoot = document.querySelector('#spa-root')
if (spaRoot !== null) {
  new App({
    target: spaRoot,
  })
}
