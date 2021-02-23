export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60351ccf99afcc269cd30295',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5oyjyoq9',
                  apiId: 'c467a104-f88f-4c5d-aabb-c942cc1bedef'
                },
                {
                  buildHookId: '60351ccf5efb31380a832285',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g4op1dcn',
                  apiId: 'beff17e9-85ea-4e30-854b-d39348744803'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomson/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g4op1dcn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
