
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/isga2025-quiz/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/isga2025-quiz"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7288, hash: 'cd9bccc6ca2e57f75034c763c9b9fbc1ca5a77cec8443e44112348e348d274a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3265, hash: 'ae19bc8e841b44eace355299bd795120b0c183d6fa7e3615f81d710796d84853', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22511, hash: '24b548af1cba154af96c95fa4ad0651894ca9a32e878c518896bb049ba765d12', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
