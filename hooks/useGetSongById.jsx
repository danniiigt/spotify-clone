import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

export const useGetSongById = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState(null);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const fetchSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
        toast.error("Error al obtener la canción");
        return;
      }

      setSong(data);
    };

    fetchSong();
    setIsLoading(false);
  }, [id, supabaseClient]);

  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]
  );
};