function GuestForm(props){

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.newGuestName) {
          props.addGuest();
        }
        else {
          alert('The new guest needs a name!');
        }
      }

    return(

        <form onSubmit={handleSubmit}>
                <label>
                Name
                </label>
                <input
                type="text"
                placeholder="Name"
                value={props.value}
                onChange={(evt) => props.setNewGuestName(evt.target.value)}
                />
                <div>
                Would this guest like a kid's meal?
                <div >
                    <div>
                    <label>
                        <input
                        type="radio"
                        value={true}
                        checked={props.newGuestMeal === 'true'}
                        name="kidsMeal"
                        onChange={(evt) => props.setNewGuestMeal(evt.target.value)}
                        />
                        Yes, this guest would like a Kid's Meal
                    </label>
                    </div>
                    <div>
                    <label>
                        <input
                        type="radio"
                        value={false}
                        checked={props.newGuestMeal === 'false'}
                        name="kidsMeal"
                        onChange={(evt) => props.setNewGuestMeal(evt.target.value)}
                        />
                        No, this guest would not like a Kid's Meal
                    </label>
                    </div>
                </div>
                </div>
                <button type="submit">Add Guest</button>
            </form>
    )
}

export default GuestForm;