# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create( firstName: "Snow", lastName: "Flake", Addr1: "13300 Atlantic blvd" , Addr2: "" , City: "Jacksonville" , State:"FL" , Zip:"31324" )
User.create( firstName: "Spring", lastName: "Chicken", Addr1: "3637 Shawnee shores dr" , Addr2: "" , City: "Jacksonville" , State:"FL" , Zip:"31324" )

Driver.create( firstName: "Super", lastName: "Driver", Addr1: "3637 Shawnee shores dr" , Addr2: "" , City: "Jacksonville" , State:"FL" , Zip:"31324" )

Store.create( Name: "Pizza", Addr1: "3637 Shawnee shores dr" , Addr2: "" , City: "Jacksonville" , State:"FL" , Zip:"31324" )
