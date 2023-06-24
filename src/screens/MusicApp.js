import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MusicApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const trackList = ['Track 1', 'Track 2', 'Track 3']; // List of track names

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelection = (track) => {
    setCurrentTrack(track);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Music App</Text>

      <View style={styles.trackContainer}>
        <Text style={styles.trackTitle}>{currentTrack ? currentTrack.title : 'No track selected'}</Text>
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
            <FontAwesome5
                name={isPlaying ? 'pause' : 'play'}
                size={24}
                color="#fff"
            />
        </TouchableOpacity>
      </View>

      <View style={styles.playlist}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        {trackList.map((track, index) => (
          <TouchableOpacity
            key={index}
            style={styles.trackButton}
            onPress={() => handleTrackSelection({ title: track })}
          >
            <Text style={styles.trackButtonText}>{track}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
    },
    trackContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    trackTitle: {
      fontSize: 18,
      marginBottom: 10,
      color: '#fff',
    },
    playButton: {
      backgroundColor: '#1DB954',
      borderRadius: 50,
      padding: 15,
      alignItems: 'center',
    },
    playIcon: {
      width: 24,
      height: 24,
      tintColor: '#fff',
      alignContent: 'center',
    },
    playlist: {
      alignItems: 'center',
    },
    playlistTitle: {
      fontSize: 20,
      marginBottom: 10,
      color: '#fff',
    },
    trackButton: {
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    trackButtonText: {
      fontSize: 16,
      color: '#000',
    },
  });

export default MusicApp;
