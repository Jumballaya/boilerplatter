# Wordpress Dev Setup

You need Docker and Docker-Compose to run this Wordpress setup.

## Environment Variables

These variables must be set in a .env file in the root folder.

* Wordpress
  - WORDPRESS_DB_HOST
  - WORDPRESS_DB_USER
  - WORDPRESS_DB_PASSWORD
  - WORDPRESS_DB_NAME

* MySQL
  - MYSQL_ROOT_PASSWORD
  - MYSQL_DATABASE
  - MYSQL_USER
  - MYSQL_PASSWORD


## Starting

Run with the command `docker-compose up` to run both the Wordpress and MySQL container.
