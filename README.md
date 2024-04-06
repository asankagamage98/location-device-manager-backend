# location-device-manager-backend
# Assessment LAYOUTindex Pvt Ltd


## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment variables](#environment-variables)


## project-overview
The backend of the project will be developed using Node.js and Express.js framework, providing a RESTful API for handling CRUD operations on locations and devices. MongoDB will be used as the database to store location and device information.

## Demo
Check out the live demo
[here](https://location-device-manager-backend.vercel.app/).

Domains
[here](https://location-device-manager-bac-git-26ec87-asankagamage98s-projects.vercel.app/).
[here](https://location-device-manager-backend-ghxwf6sh1.vercel.app/).


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asankagamage98/location-device-manager-backend.git

2. Navigate to the project directory:
    cd location-device-manager-backend

3. Install dependencies:
    npm install


## Usage
To run the project, use the following command:
    npm start || npm run dev

The application will be accessible at http://localhost:3001


## endpoints
## endpoints of location
Create new location:
Endpoint: POST - http://localhost:3001/api/location
Description: Create a new location.
Authentication: Non-authenticated

Get all locations :
Endpoint: GET -  http://localhost:3001/api/location 
Description: Retrieve all locations.
Authentication: Non-authenticated

Update location:
Endpoint: PUT - http://localhost:3001/api/location/:id
Description: Update the location.
Authentication: Non-authenticated

Get location by id:
Endpoint:GET - http://localhost:3001/api/location/:id
Description: Retrieve location information for given id.
Authentication: Non-authenticated

Delete location by id:
Endpoint:DELETE -http://localhost:3001/api/location/:id
Description: delete location by id.
Authentication: Non-authenticate

## endpoints of device
Create new device:
Endpoint: POST - http://localhost:3001/api/device
Description: Create a new device.
Authentication: Non-authenticated

Get all deviceS :
Endpoint: GET -  http://localhost:3001/api/device 
Description: Retrieve all devices.
Authentication: Non-authenticated

Update device:
Endpoint: PUT - http://localhost:3001/api/device/:id
Description: Update the device.
Authentication: Non-authenticated

Get device by id:
Endpoint:GET - http://localhost:3001/api/device/:id
Description: Retrieve device information for given id.
Authentication: Non-authenticated

Delete device by id:
Endpoint:DELETE -http://localhost:3001/api/device/:id
Description: delete device by id.
Authentication: Non-authenticate

## environment-variables

```
PORT=3001
# mongodb atlas connection string
MONGODB_URL=
```
