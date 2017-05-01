### Synopsis

Client side pagination. 

Creates Marionette View with footer and pagination controls.

### Installation

    npm install --save pagurbate
    
### Usage

    import pagurbate from 'pagurbate'
    
    const pageData = {
      pageSize: 10,
      total: 30, 
      pageCount: 3,
      currentPage: 2
    }
    
    const pagurbate = new Pagurbate({ pageData: pageData })
    
    view.showChildView('body', pagurbate)