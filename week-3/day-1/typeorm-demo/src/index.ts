import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Ben"
    user.lastName = "Kalnbach"
    user.age = 10

    console.log("Inserting a new photo into the database")
    const photo = new Photo()
    photo.name = "Just Orange"
    photo.description = "Just orange"
    photo.filename = "https://www.pexels.com/photo/white-and-brown-cat-1687831/"
    photo.views = 5
    photo.isPublished = false;

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    const photoRepository = AppDataSource.getRepository(Photo)
    await photoRepository.save(photo)
    console.log("Saved a new photo with id: " + photo.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Loading second photo from the database...")
    const secondPhoto = await photoRepository.findOneBy({id: 2})
    console.log("Loaded photos: ", secondPhoto)

    const allViewedPhotos = await photoRepository.findBy({
        views: 5
    })
    console.log("All viewed phtots: ", allViewedPhotos)

    const [photos, photoCount] = await photoRepository.findAndCount()
    console.log("All photos: ", photos)
    console.log("Photo count: ", photoCount)

    const photoToUpdate = await photoRepository.findOneBy({
        id: 1
    })
    photoToUpdate.name = "Just Cat"
    await photoRepository.save(photoToUpdate)

    const photoToRemove = await photoRepository.findOneBy({
        id: 4
    })
    await photoRepository.remove(photoToRemove)


}).catch(error => console.log(error))
