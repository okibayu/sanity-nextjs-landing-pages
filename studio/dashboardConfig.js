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
                  buildHookId: '61a1f763d7a10990f6d835b1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-22ea7ify',
                  apiId: 'bdb62753-d08f-4b30-8250-46430d420c89'
                },
                {
                  buildHookId: '61a1f763f2330789f58c1d03',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dqem4k2i',
                  apiId: 'e61134ba-b475-45e9-8ddb-f8e84d21e23a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/okibayu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dqem4k2i.netlify.app', category: 'apps'}
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
