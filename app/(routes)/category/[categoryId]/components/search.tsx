'use client';

const Search = ({ onSearch }) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e)}
        className="flex h-10 w-full mb-7 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export default Search;
