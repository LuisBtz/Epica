export const structure = (S, context) =>
  S.list()
    .title('Pages')
        .items([
            S.listItem()
                .title('Landing Page')
                        .icon(() => '🌏')
                        .child(
                            S.editor()
                                .id('landingPage')
                                .schemaType('landingPage')
                                .documentId('landingPage')
                                .title('Landing Page')
                        ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) => 
                ![
                    'landingPage',
                ].includes(listItem.getId())
            )    ]) 