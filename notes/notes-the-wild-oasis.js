/*
* How to plan a React application:
1- Gather application requirements and features
2- Divide teh application in pages
3- Divide the application into featutes categories
4- Decide on what libraries to use (technology decisions)


* Project requirements from the bussiness:
@ Step 1:
? Authentication : { 1- Users of the app are hotel employees.They need to be logged into the application to perform tasks.

? 2- New users can only be signed up inside the applications(to guarantee that only actual hotel employees can get accounts)

? 3- Users should be able to upload an avatar,and change their name and password }

++ Cabins : { 4- App needs a table view with all cabins, showing the cabin photo,name,capacity,price and current discount

++ 5- Users should be able to update or delete a cabin,and to create new cabins(including uploading a photo) }

! Bookings: { 6- App needs a table view with all bookings, showing arrival and departure dates, status and paid amount, as well as cabin and guest data 

! 7- The bookings status can be "unconfirmed" (booked but not yet checked in), "checked in",or "checked out". The table should be filterable by this important status

! 8- Other booking data including: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price }

* Check in/out : { 9- Users should be able to delete,check in, or check out a booking as the guest arrives (no editing necessary for now)

* 10- Bookings may not have been paid yet on guest arrival.Therefore, on check in,users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)

* 11- On check in,the guest should have the ability to add breakfast for the entire stay,if they hadn't already }

Guests : { 12- Guest data should contain: full name,email,national ID,nationality, and a country flag for easy identification}

@ Dashboard : { 13- The initial app screen should be a deshboard, to display important information for the last 7, 30 or 90 days:
  @ 👉 A list of guests checking in and out on the current day.Users should be able to perform these tasks from here
  @ 👉 Statistics on recent bookings, sales, check ins, and occupancy rate
  @ 👉 A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment)
  @ 👉 A chart showing statistics on stay durations, as this is an important metric for the hotel}

++ Settings : { 14- Users should be able to define a few application-wide settings:breakfast price, min and max nights/bookings, max guests/bookings}

15- App needs a dark mode

@ Step 2+3:
* Features categories:
1- Bookings
2- Cabins 
3- Guests 
4- Dashboard
5- Check in and out
6- App settings
7- Authentication

* Necessary pages:
1- Dashboard => /dashboard
2- Bookings => /bookings
3- Cabins => /cabins
4- Bookings check in => checkin/:bookingID
5- App settings => /settings
6- User sign up => /users
7- Login => /login
8- Account settings => /account

!HINT: most of the state will be global

@ Step 4:
* Client-side rendering (CSR) or server-side rendering(SSR)?
++ - CSR with plain React:
- Used to build single-page applications (SPAs)
- All HTML is rendered on the client
- All JavaScript needs to be downloaded before apps start running: bad for performance
++ like React

++ - SSR with framework:
- Used to build multi-page applications(MPAs)
- Some HTML is rendered in the server
- More performant, as less JavaScript needs to be downloaded
- The React team is moving more and more in this direction
++ like NEXTjs and REMIX

* Technology decisions:
Routing => React Router => The standard for React SPAs

Styling => Styled components => Very popular way of writing component-scoped CSS,right insdie JavaScript. A technology worth learning

Remote state management => React Query => The best way of managing remote state,with features like caching automatic re-fetching,pre-fetching, offline support,etc. Alternatives are SWR and RTK Query, but this is the most popular

UI state management => Context API => There is almost no UI state needs in this app, so one simple context with useState will be enough, No need for Redux

Form management => React Hook Form => Handling bigger forms can be a lot of work,such as manual state creation and error handling, A library can simplify all this

Other tools => React icons/React hot toast/Recharts/data-fns/Superbase
*/