import {createContext,useContext,useEffect,useState} from 'react'

const Context = createContext()

export const AuthProvider = ({children}) => {

    const [userLogged, setUserLogged] = useState(
        JSON.parse(localStorage.getItem("userLogged")) || false
    )
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("userData")) || {}
    )
    const [selectedCard, setSelectedCard] = useState(
        JSON.parse(localStorage.getItem("selectedCard")) || {}
    )
    const [postsCategory, setPostsCategory] = useState(
        JSON.parse(localStorage.getItem("postsCategory")) || 'all'
    )

    const data = {
        userLogged,
        setUserLogged,
        selectedCard,
        setSelectedCard,
        userData,
        setUserData,
        postsCategory,
        setPostsCategory
    }

    useEffect(()=>{
        localStorage.setItem("userLogged",JSON.stringify(userLogged))
    },[userLogged])

    useEffect(()=>{
        localStorage.setItem("selectedCard",JSON.stringify(selectedCard))
    },[selectedCard])

    useEffect(()=>{
        localStorage.setItem("userData",JSON.stringify(userData))
    },[userData])

    useEffect(()=>{
        localStorage.setItem("postsCategory",JSON.stringify(postsCategory))
    },[postsCategory])
    

    return <Context.Provider value={data}>{children}</Context.Provider>
}

export const useAuth = () => useContext(Context)