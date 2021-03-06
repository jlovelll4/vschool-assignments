import React from 'react';
import Friend from "./Friend"
import Pet from "./Pet"

const FriendList = (props)=>{
    const styles = {
        div:{

        }
    }
    const friends = [
        {
        name: "Ben",
        age: 29,
        pets: [
            {
            name: "spot",
            breed: "tabby"
            },{
            name: "John Johnson",
            breed: "husky"
            },{
            name: "Bear the bear",
            breed: "Grizzly"
            }
        ]
        },{
        name: "Bob",
        age: 31,
        pets: [
            {
            name: "Sally",
            breed: "Australian Shepard"
            }
        ]
        },{
        name: "Marcus",
        age: 25,
        pets: [
            {
            name: "Indy",
            breed: "Akita"
            },{
            name: "Anna",
            breed: "persian cat"
            }
        ]
        },{
        name: "Jacob",
        age: 20,
        pets: [
            {
            name: "fluffy",
            breed: "sphynx cat"
            },{
            name: "patches",
            breed: "sphynx cat"
            },{
            name: "tiger",
            breed: "sphynx cat"
            },{
            name: "oscar",
            breed: "sphynx cat"
            }
        ]
        }
    ]

    const mappedFriends = friends.map(friend =>{
        return <Friend name={friend.name}
                        age = {friend.age}
                        key = {friend.name + friend.age}
                        pets = {friend.pets}
                        />
                        
    })

    return (
        <div style = {styles}>
        {mappedFriends}
        </div>
    )
}
export default FriendList