export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620d68fc1c50ac86e8829d40',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-55cacy3a',
                  apiId: '5028247a-d27b-4046-97a2-254e89ee95a4'
                },
                {
                  buildHookId: '620d68fc3805ec8a38034cd8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-te6bwowv',
                  apiId: 'ca549af8-0f76-4960-ae2a-4389ba28ac32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seadwellermf/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-te6bwowv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
