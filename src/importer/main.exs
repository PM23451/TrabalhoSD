defmodule XMLImporter do
  use Ecto.Query
  import Ecto.Changeset

  def insert_data_from_xml(xml_file) do
    {:ok, xml_content} = File.read(xml_file)

    case Poison.decode(xml_content) do
      {:ok, decoded_data} ->
        insert_crashes(decoded_data)
      {:error, reason} ->
        IO.puts("Error decoding XML content: #{reason}")
    end
  end

  defp insert_crashes(data) do
    Enum.each(data, &insert_crash/1)
  end

  defp insert_crash(crash_data) do
    crash_changeset = Crash.changeset(%TrabalhoSD.Crash{}, crash_data)

    case TrabalhoSD.Repo.insert(crash_changeset) do
      {:ok, _crash} ->
        IO.puts("Crash inserted successfully!")
      {:error, changeset} ->
        IO.puts("Error inserting crash: #{inspect(changeset)}")
    end
  end
end

defmodule XML do
  def list do
    IO.puts("Listing all available XML files!")
    case File.ls("/data") do
      {:ok, files} ->
        Enum.each(files, fn file ->
          if String.ends_with?(file, ".xml") do
            full_path = "/data/#{file}"
            IO.puts("\t> #{full_path}")
            XMLImporter.insert_data_from_xml(full_path)
          end
        end)
      {:error, reason} ->
        IO.puts("Error accessing /data: #{reason}")
    end
  end
end

XML.list()
