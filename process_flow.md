sequenceDiagram
    QReports->>IRequest: Access Item <br>Application
    IRequest-->>Backend: Search Item
    Backend-->>Database: Check item to DB
    Database->>Backend: Return list of search resutls
    Backend-->>Backend: Format result/s
    Backend-->>IRequest: Return formatted results
    IRequest-->>IRequest: Display Results
    IRequest-->>IRequest: Ask user, if want <br>to continue
    IRequest-->>IRequest: If yes, display the <br> form for creation
    IRequest-->>IRequest: Save (Do some <br>input validation)
    IRequest->>Backend: Send save request to backend
    Backend-->>Backend: Backend Validation
    Backend-->>IRequest: Return error, if it has
    Backend-->>Database: Commit/Save data to db
    Database-->>Backend: Commit Status
    Backend-->>Backend: Process Result
    Backend->>IRequest: Return save status
    IRequest->>IRequest: Close IRequest App
    IRequest->>QReports: Return to QReports


