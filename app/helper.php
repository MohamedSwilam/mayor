<?php

if (!function_exists('download_file'))
{
    function download_file($name, $path)
    {
        if (request()->hasFile($name)){
            $file = request()->file($name);
            $new_name = md5(time() . $file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension();
            request()->file($name)->move($path, $new_name);
            return $new_name;
        }
        return null;
    }
}
