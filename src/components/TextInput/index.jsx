import './styles.css'

export const TextInput = ({searchValue, handleSearch}) => {
    return (
        <input
        className="text-input" 
        type="search"
        onChange={handleSearch}
        value={searchValue}
        />
    )
}