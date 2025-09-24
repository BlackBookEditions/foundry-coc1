export class EntitySummary {
    static create(item){
        return {
            _id : item._id,
            name: item.name,
            img: item.img,
            sourceId : item.uuid
        }
    }

}
