export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d0eb51b49b1b162a5478d14',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio',
                  apiId: '980bf78f-7cee-43c0-bb38-01e5e9e1612b'
                },
                {
                  buildHookId: '5d0eb51be67e356455ed4513',
                  title: 'Blog Website',
                  name: 'sanity-blog',
                  apiId: '5300bcd2-76f5-4916-b103-fa08020ca40e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcusramberg/sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
