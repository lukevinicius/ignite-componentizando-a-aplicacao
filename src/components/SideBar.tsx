import { useCallback } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: SideBarProps) {
  // Complete aqui
  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [selectedGenreId])

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}